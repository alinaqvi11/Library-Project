import HttpResponse from "../Utils/httpResponse";
import { respMessage, statusCode } from "../Utils/httpStatus";
import { inject, injectable } from "inversify";
import { IBookRespository,IBookRespositoryId } from "../../domain/entitties/book/IBook.Repository";
import BookEntity from "../../domain/entitties/book/Book.Entity";
import logger from "../../infrastructure/logger/logger";
@injectable()
class BookService {
    constructor(@inject(IBookRespositoryId) private bookRepository: IBookRespository){}
    getBook = async (id) => {
        try {
            const book = await this.bookRepository.getBookBySearch({bookId: id});
        return HttpResponse.create(statusCode.Ok, book);
        } catch (error) {
            logger.error(error)
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR);
        }
        
    }
    createBook = async (body) => {
        try {
            const dtoBook = BookEntity.createFromInput(body.name,body.year,body.authorId)
            const author = await this.bookRepository.createBook(dtoBook);
            const daoBook = BookEntity.createFromObject(author)
            return HttpResponse.create(statusCode.Ok, daoBook);
        } catch (error) {
            logger.error(error)
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR);  
        }
     
    }

    updateBook = async (body,id) => {
        try {
            const bookExist = await this.bookRepository.getBookBySearch({bookId: id});
        if(!bookExist){
            return HttpResponse.create(statusCode.NOT_FOUND, respMessage.NOT_FOUND);
        }
        const book = {...bookExist,...body}
        const dtoBook = BookEntity.createFromInput(book.name,book.year,book.authorId);
        console.log(dtoBook);
        
        const daoBook = await this.bookRepository.updateBook(dtoBook,id);
        return HttpResponse.create(statusCode.Ok, respMessage.UPDATED);
        } catch (error) {
            logger.error(error)
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR); 
        }
        
    }

    removeBook = async (id) => {
        try {
            const bookExist = await this.bookRepository.getBookBySearch({bookId: id});
            if(!bookExist){
                return HttpResponse.create(statusCode.NOT_FOUND, respMessage.NOT_FOUND);
            }
            await this.bookRepository.deleteBook(id);
            return HttpResponse.create(statusCode.Ok, respMessage.DELETED);
        } catch (error) {
            logger.error(error)
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR); 
        }
       
    }
}

export default BookService
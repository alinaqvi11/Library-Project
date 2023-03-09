import HttpResponse from "../Utils/httpResponse";
import { respMessage, statusCode } from "../Utils/httpStatus";
import { inject, injectable } from "inversify";
import { ILibraryRespository,ILibraryRespositoryId } from "../../domain/entitties/library/ILibrary.repository";
import logger from "../../infrastructure/logger/logger";
import LibraryEntity from "../../domain/entitties/library/Library.Entity";
import { ILibraryBookRespository, ILibraryBookRespositoryId } from "../../domain/entitties/libraryBook/ILibraryBook.repository";

@injectable()
class LibraryService {
    constructor(@inject(ILibraryRespositoryId) private libraryRepository: ILibraryRespository,
    @inject(ILibraryBookRespositoryId) private libraryBookRepository: ILibraryBookRespository){}
    getLibrary = async (id) => {
        try {
            const library = await this.libraryRepository.getLibraryBySearch({libraryId: id})
        return HttpResponse.create(statusCode.Ok, library);
        } catch (error) {
            logger.error(error)
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR);
        }
    }

    createLibrary = async (body) => {
        try {
            const dtoLibrary = LibraryEntity.createFromInput(body.name,body.address);
            const library = await this.libraryRepository.createLibrary(dtoLibrary);
            const daoLibrary = LibraryEntity.createFromObject(library);
            await this.libraryBookRepository.createLibraryBook({libraryId: library.id,bookId: body.bookId})
            return HttpResponse.create(statusCode.Ok, library);  
        } catch (error) {
            logger.error(error)
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR);
        }
        
    }

    updateLibrary = async (body,id) => {
        try {
            const libraryExist = await this.libraryRepository.getLibraryBySearch({libraryId: id});
            if(!libraryExist){
                return HttpResponse.create(statusCode.Ok, respMessage.NOT_FOUND);
            }
            const libraryUpdate = {...libraryExist,...body}
             await this.libraryRepository.updateLibrary(libraryUpdate,id);
            return HttpResponse.create(statusCode.Ok, respMessage.UPDATED);
        } catch (error) {
            logger.error(error)
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR);
        }
      
    }

    removeLibrary = async (id) => {
        try {
            const libraryExist = await this.libraryRepository.getLibraryBySearch({libraryId: id});
            if(!libraryExist){
                return HttpResponse.create(statusCode.Ok, respMessage.NOT_FOUND);
            }
             await this.libraryRepository.deleteLibrary(id);
        return HttpResponse.create(statusCode.Ok, respMessage.DELETED);
        } catch (error) {
            logger.error(error)
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR);
        }
        
    }
}

export default LibraryService
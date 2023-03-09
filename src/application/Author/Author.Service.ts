import HttpResponse from "../Utils/httpResponse";
import { statusCode } from "../Utils/httpStatus";
import { inject, injectable } from "inversify";
import { IAuthRespository,IAuthRespositoryId } from "../../domain/entitties/author/IAuthor.Repository";
import AuthorEntity from "../../domain/entitties/author/Author.Entity";
import { respMessage } from "../Utils/httpStatus";
import logger from "../../infrastructure/logger/logger";
@injectable()
class AuthorService  {
    constructor(@inject(IAuthRespositoryId) private authorRepository: IAuthRespository){}
    getAuthor = async (id) => {
        try {
            const author = await this.authorRepository.getAuthorBySearch({authorId: id});
            if(!author){
                return HttpResponse.create(statusCode.NOT_FOUND, respMessage.NOT_FOUND);
            }
            return HttpResponse.create(statusCode.Ok, author);  
        } catch (error) {
            logger.error(error);
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR);  
        }

    }
    createAuthor = async (body) => {
        try {
            const dtoAuthor = AuthorEntity.createFromInput(body.name,body.genre,body.birthDate)
            const author = await this.authorRepository.createAuthor(dtoAuthor);
            const daoAuthor = AuthorEntity.createFromObject(author)
        return HttpResponse.create(statusCode.Ok, author);
        } catch (error) {
            logger.error(error);
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR);
        }
    }

    updateAuthor = async (body,id) => {
        try {
            const authorExist = await this.authorRepository.getAuthorBySearch({authorId: id});
            if(!authorExist){
                return HttpResponse.create(statusCode.NOT_FOUND, respMessage.NOT_FOUND);
            }
            const authorBody = {...authorExist,...body};
            const dtoAuthor = AuthorEntity.createFromInput(authorBody.name,authorBody.genre,authorBody.birthDate)
            const author = await this.authorRepository.updateAuthor(dtoAuthor,id);
            return HttpResponse.create(statusCode.Ok, author);
        } catch (error) {
            logger.error(error);
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR);
        }
  
    }

    removeAuthor = async (id) => {
        try {
            const authorExist = await this.authorRepository.getAuthorBySearch({authorId: id})
            if(authorExist){
                await this.authorRepository.deleteAuthor(id);
                return HttpResponse.create(statusCode.Ok, respMessage.DELETED);
            }
            return HttpResponse.create(statusCode.NOT_FOUND, respMessage.NOT_FOUND);
            
        } catch (error) {
            logger.error(error);
            return HttpResponse.create(statusCode.SERVER_ERROR, respMessage.SERVER_ERROR); 
        }
    }
}

export default AuthorService
import HttpResponse from "../utils/httpResponse";
import { statusCode } from "../utils/httpStatus";
import AuthorRepository from "../../infrastructure/database/repositories/Author/author";
class AuthorService {
    static getAuthor = async () => {
        const author = await AuthorRepository.getUserBySearch({authorId: 1});
        return HttpResponse.create(statusCode.Ok, author);
    }
    static createAuthor = async (body) => {
        const author = await AuthorRepository.createAuthor(body);
        return HttpResponse.create(statusCode.Ok, author);
    }

    static updateAuthor = async (body,id) => {
        const authorExist = await AuthorRepository.getUserBySearch({authorId: 1});
        const authorUpdate = {...body,...authorExist}
        const author = await AuthorRepository.updateAuthor(body,id);

        return HttpResponse.create(statusCode.Ok, author);
    }

    static removeAuthor = async (id) => {
        const author = await AuthorRepository.deleteAuthor(id);
        return HttpResponse.create(statusCode.Ok, author);
    }
}

export default AuthorService
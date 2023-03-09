import {Repository} from "typeorm";
import {dataSource} from "../../mysqlConnection";
import { Authors } from "../../model/authors";
import { IAuthRespository } from "../../../../domain/entitties/author/IAuthor.Repository";
import { injectable } from 'inversify'
import AuthorEntity from "../../../../domain/entitties/author/Author.Entity";

@injectable()
class AuthorRepository implements IAuthRespository  {
    private authorRepository: Repository<Authors>;

    constructor() {
        this.authorRepository = dataSource.getRepository(Authors);
    }

    async getAuthorBySearch(searchFilters) {
        const author = await this.authorRepository.findOne({
            where: searchFilters
        });
        if (author) {
            return AuthorEntity.createFromObject(author);
        }
        return author;
    }

    async createAuthor(body) {
        return await this.authorRepository.save(body);
    }

    async updateAuthor(body,id: number){
        await this.authorRepository.update({authorId: id},body);
        return true
    }

    async deleteAuthor(id: number){
        await this.authorRepository.delete(id);
        return true
    }
}

export default AuthorRepository;





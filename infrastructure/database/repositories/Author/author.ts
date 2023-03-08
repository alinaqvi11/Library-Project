import {Repository, UpdateResult, FindOptionsWhere} from "typeorm";


import {dataSource} from "../../mysqlConnection";
import { Authors } from "../../model/authors";

class AuthorRepository  {
    private authorRepository: Repository<Authors>;

    constructor() {
        this.authorRepository = dataSource.getRepository(Authors);
    }

    async createAuthor(body) {
        return await this.authorRepository.save(body);
    }

    async updateAuthor(body,id){
        return this.authorRepository.update(body,{authorId: id})
    }

    async deleteAuthor(id){
        await this.authorRepository.delete(id)
    }

    async getUserBySearch(searchFilters) {
        const user = await this.authorRepository.findOne({
            where: searchFilters
        });

        if (user) {
            return user;
        }

        return false;
    }
}

export default new AuthorRepository();



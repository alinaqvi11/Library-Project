import {Repository} from "typeorm";


import {dataSource} from "../../mysqlConnection";
import { Library } from "infrastructure/database/model/library";

class LibraryRepository  {
    private libraryRepository: Repository<Library>;

    constructor() {
        this.libraryRepository = dataSource.getRepository(Library);
    }

    async getLibraryBySearch(searchFilters) {
        const library = await this.libraryRepository.findOne({
            where: searchFilters
        });

        if (library) {
            return library;
        }

        return false;
    }

    async createLibrary(body) {
        return await this.libraryRepository.save(body);
    }

    async updateLibrary(body,id){
        return this.libraryRepository.update(body,{libraryId: id})
    }

    async deleteLibrary(id){
        await this.libraryRepository.delete(id)
    }
}

export default new LibraryRepository();
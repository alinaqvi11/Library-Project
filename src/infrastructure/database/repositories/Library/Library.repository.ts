import {Repository} from "typeorm";
import {dataSource} from "../../mysqlConnection";
import { Library } from "../../model/library";
import { ILibraryRespository } from "../../../../domain/entitties/library/ILibrary.repository";
import { injectable } from "inversify";

@injectable()
class LibraryRepository implements ILibraryRespository  {
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
        await this.libraryRepository.update({libraryId: id},body)
        return true
    }

    async deleteLibrary(id){
        await this.libraryRepository.delete(id)
        return true;
    }
}

export default LibraryRepository;
import {Repository} from "typeorm";
import {dataSource} from "../../mysqlConnection";
import { injectable } from "inversify";
import { LibraryBooks } from "../../model/libraryBooks";
import { ILibraryBookRespository } from "../../../../domain/entitties/libraryBook/ILibraryBook.repository"
@injectable()
class LibraryBookRepository implements ILibraryBookRespository  {
    private libraryBookRepository: Repository<LibraryBooks>;

    constructor() {
        this.libraryBookRepository = dataSource.getRepository(LibraryBooks);
    }

    async getLibraryBookBySearch(searchFilters) {
        const library = await this.libraryBookRepository.findOne({
            where: searchFilters
        });

        if (library) {
            return library;
        }

        return false;
    }

    async createLibraryBook(body) {
        return await this.libraryBookRepository.save(body);
    }

    async updateLibraryBook(body,id){
        await this.libraryBookRepository.update({libraryId: id},body)
        return true
    }

    async deleteLibraryBook(id){
        await this.libraryBookRepository.delete(id)
        return true;
    }
}

export default LibraryBookRepository;
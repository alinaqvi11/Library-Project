import {Repository, UpdateResult, FindOptionsWhere} from "typeorm";
import {dataSource} from "../../mysqlConnection";
import { Books } from "../../model/books";
import { injectable } from "inversify";
import { IBookRespository } from "../../../../domain/entitties/book/IBook.Repository";

@injectable()
class BookRepository implements IBookRespository  {
    private bookRepository: Repository<Books>;

    constructor() {
        this.bookRepository = dataSource.getRepository(Books);
    }

    async getBookBySearch(searchFilters) {
        const book = await this.bookRepository.findOne({
            where: searchFilters
        });

        if (book) {
            return book;
        }

        return false;
    }

    async createBook(body) {
    return await this.bookRepository.save(body);
    }

    async updateBook(body,id){
        await this.bookRepository.update({bookId: id},body);
        return true;
    }

    async deleteBook(id){
        await this.bookRepository.delete(id)
        return true
    }
}

export default BookRepository;
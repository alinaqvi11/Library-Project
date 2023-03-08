import {Repository, UpdateResult, FindOptionsWhere} from "typeorm";


import {dataSource} from "../../mysqlConnection";
import { Books } from "../../model/books";

class BookRepository  {
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
        return this.bookRepository.update(body,{bookId: id})
    }

    async deleteBook(id){
        await this.bookRepository.delete(id)
    }
}

export default new BookRepository();
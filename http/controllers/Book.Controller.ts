import { inject, injectable } from "inversify";
import BookService from "../../src/application/Book/Book.Service";
import HttpResponse from "../../src/application/Utils/httpResponse";
@injectable()
class BookController {
  constructor(private bookService: BookService){}
  getBook = async (req, res) => {
    const book = await this.bookService.getBook(req.params.id);
    HttpResponse.convertToExpress(res, book);
  };
  createBook = async (req, res) => {
    const book = await this.bookService.createBook(req.body);
    HttpResponse.convertToExpress(res, book);
  };

  updateBook = async (req, res) => {
    const book = await this.bookService.updateBook(req.body,req.params.id);
    HttpResponse.convertToExpress(res, book);
  };

  removeBook = async (req, res) => {
    const book = await this.bookService.removeBook(req.params.id);
    HttpResponse.convertToExpress(res, book);
  };
}

export default BookController;
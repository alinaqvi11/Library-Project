import bookService from "../../application/book/book";
import HttpResponse from "../../application/utils/httpResponse";
class BookController {
  static getBook = async (req: any, res: any) => {
    const book = await bookService.getBook();
    HttpResponse.convertToExpress(res, book);
  };
}

export default BookController;
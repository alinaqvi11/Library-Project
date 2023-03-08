import HttpResponse from "application/utils/httpResponse";
import { statusCode } from "application/utils/httpStatus";

class BookService {
    static getBook = async () => {
        return HttpResponse.create(statusCode.Ok, 'a');
    }
}

export default BookService
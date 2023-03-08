import AuthorService from "../../application/author/author";
import HttpResponse from "../../application/utils/httpResponse";
class AuthorController {
  static getAuthor = async (req: any, res: any) => {
    const author = await AuthorService.getAuthor();
    HttpResponse.convertToExpress(res, author);
  };
  static createAuthor = async (req: any, res: any) => {
    const author = await AuthorService.createAuthor(req.body);
    HttpResponse.convertToExpress(res, author);
  };

  static updateAuthor = async (req: any, res: any) => {
    const author = await AuthorService.updateAuthor(req.body,req.params.id);
    HttpResponse.convertToExpress(res, author);
  };

  static removeAuthor = async (req: any, res: any) => {
    const author = await AuthorService.removeAuthor(req.params.id);
    HttpResponse.convertToExpress(res, author);
  };
}

export default AuthorController;
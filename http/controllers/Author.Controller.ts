import HttpResponse from "../../src/application/Utils/httpResponse";
import { inject, injectable } from "inversify";
import AuthorService from "../../src/application/Author/Author.Service";
@injectable()
class AuthorController {
  constructor(private authorService: AuthorService){}
  getAuthor = async (req, res) => {
    const author = await this.authorService.getAuthor(req.params.id);
    HttpResponse.convertToExpress(res, author);
  };
  createAuthor = async (req, res) => {
    const author = await this.authorService.createAuthor(req.body);
    HttpResponse.convertToExpress(res, author);
  };

  updateAuthor = async (req, res) => {
    const author = await this.authorService.updateAuthor(req.body,req.params.id);
    HttpResponse.convertToExpress(res, author);
  };

  removeAuthor = async (req, res) => {
    const author = await this.authorService.removeAuthor(req.params.id);
    HttpResponse.convertToExpress(res, author);
  };
}

export default AuthorController;
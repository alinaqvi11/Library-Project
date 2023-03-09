import LibraryService from "../../src/application/Library/Library.Service";
import HttpResponse from "../../src/application/Utils/httpResponse";
import { inject, injectable } from "inversify";
@injectable()
class LibraryController {
    constructor(private libraryService: LibraryService){}
    getLibrary = async (req, res) => {
      const library = await this.libraryService.getLibrary(req.params.id);
      HttpResponse.convertToExpress(res, library);
    };
    createLibrary = async (req, res) => {
      const library = await this.libraryService.createLibrary(req.body);
      HttpResponse.convertToExpress(res, library);
    };
  
    updateLibrary = async (req, res) => {
      const library = await this.libraryService.updateLibrary(req.body,req.params.id);
      HttpResponse.convertToExpress(res, library);
    };
  
    removeLibrary = async (req, res) => {
      const library = await this.libraryService.removeLibrary(req.params.id);
      HttpResponse.convertToExpress(res, library);
    };
}

export default LibraryController;
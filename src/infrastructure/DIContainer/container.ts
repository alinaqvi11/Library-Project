import { Container } from "inversify";
import {
  IAuthRespository,
  IAuthRespositoryId,
} from "../..//domain/entitties/author/IAuthor.Repository";
import {
  IBookRespository,
  IBookRespositoryId,
} from "../../domain/entitties/book/IBook.repository";
import {
  ILibraryRespository,
  ILibraryRespositoryId,
} from "../../domain/entitties/library/ILibrary.repository";
import authorRepository from "../database/repositories/Author/author.repository";
import bookRepository from "../database/repositories/Books/book.repository";
import libraryRepository from "../database/repositories/Library/library.repository";
import { ILibraryBookRespository,ILibraryBookRespositoryId } from "../../domain/entitties/libraryBook/ILibraryBook.repository";
import LibraryBookRepository from "../database/repositories/LibraryBook/LibraryBook.respository";
const container = new Container({
  autoBindInjectable: true,
  defaultScope: "Singleton",
});
container.bind<IAuthRespository>(IAuthRespositoryId).to(authorRepository);

container.bind<IBookRespository>(IBookRespositoryId).to(bookRepository);

container
  .bind<ILibraryRespository>(ILibraryRespositoryId)
  .to(libraryRepository);

  container
  .bind<ILibraryBookRespository>(ILibraryBookRespositoryId)
  .to(LibraryBookRepository);
 
export default container;

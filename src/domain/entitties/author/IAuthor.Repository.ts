import AuthorEntity from "./Author.Entity";
export const IAuthRespositoryId = Symbol.for(
    'IAuthRespository',
  );
export interface IAuthRespository {
    getAuthorBySearch(searchFilters): Promise<any>;
    createAuthor(body: AuthorEntity): Promise<AuthorEntity>;
    updateAuthor(body,id): Promise<boolean>;
    deleteAuthor(id): Promise<boolean>
}
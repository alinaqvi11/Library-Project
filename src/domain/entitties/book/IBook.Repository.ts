export const IBookRespositoryId = Symbol.for(
    'IBookRespository',
  );
export interface IBookRespository {
    getBookBySearch(searchFilters): Promise<any>;
    createBook(body): Promise<any>;
    updateBook(body,id: number): Promise<boolean>;
    deleteBook(id: number): Promise<boolean>
}
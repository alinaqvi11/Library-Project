export const ILibraryBookRespositoryId = Symbol.for('ILibraryBookRespository')
export interface ILibraryBookRespository {
    getLibraryBookBySearch(searchFilters): Promise<any>;
    createLibraryBook(body): Promise<any>;
    updateLibraryBook(body,id): Promise<boolean>;
    deleteLibraryBook(id): Promise<boolean>
}
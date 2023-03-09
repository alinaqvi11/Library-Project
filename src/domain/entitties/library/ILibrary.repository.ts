import LibraryEntity from "./Library.Entity";

export const ILibraryRespositoryId = Symbol.for('ILibraryRespository')
export interface ILibraryRespository {
    getLibraryBySearch(searchFilters): Promise<any>;
    createLibrary(body): Promise<LibraryEntity>;
    updateLibrary(body,id): Promise<boolean>;
    deleteLibrary(id): Promise<boolean>
}
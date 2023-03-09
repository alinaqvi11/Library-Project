class LibraryEntity {
    name: string;
    address: string
    id: number;

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }

    static createFromInput = (name,address) => {
        return new LibraryEntity(name,address)
    }

    static createFromObject = (body) => {
        const library = new LibraryEntity(body.name,body.address);
        library.id = body.libraryId;
    }
}

export default LibraryEntity
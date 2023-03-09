class BookEntity {
    name: string;
    year: number;
    authorId : number
    id: number;

    constructor(name: string,year: number, authorId: number){
        this.name = name;
        this.year = year;
        this.authorId = authorId
    }

    static createFromInput = (name,year,authorId) => {
        return new BookEntity(name,year,authorId)
    }

    static createFromObject = (body) => {
        const book = new BookEntity(body.name,body.year,body.authorId);
        book.id = body.bookId;
        return book;
    }
}

export default BookEntity
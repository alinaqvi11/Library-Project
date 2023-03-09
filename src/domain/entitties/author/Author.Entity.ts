class AuthorEntity {
        name : string;
        genre: string;
        birthDate: Date;
  id: any;

        constructor(name:string,genre:string,birthDate:Date) {
          this.name = name;
          this.genre = genre;
          this.birthDate = birthDate;
        }
        static createFromInput = (name,genre,birthDate) => {
          return new AuthorEntity(
            name, 
            genre, 
            birthDate, 
          );
          }
        static createFromObject  = (body) => {
           const author = new AuthorEntity(body.name,body.genre,body.birthDate);
           author.id = body.id;
           return author;
        }  
        
}
export default AuthorEntity
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import  {Books}  from './books';

@Entity({ name: 'authors' })
export class Authors {
  @PrimaryGeneratedColumn({ type: 'int' })
  authorId: number;

  @Column({nullable: false})
  name: string;

  @Column({type: "date",
  nullable: true})
  birthDate: number;

  @Column({nullable: false})
  genre: string;

  @OneToMany(() => Books, (books) => books.authors, {
    cascade: true,
  })
  books: Books[];



 

//   @OneToMany(() => Positions, (positions) => positions.companies, {
//     cascade: true,
//   })
//   positions: Positions[];
}

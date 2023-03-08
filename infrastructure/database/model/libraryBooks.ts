import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Books } from './books';
import { Library } from './library';

@Entity({ name: 'librarybooks' })
export class LibraryBooks {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({type: 'int', nullable: true})
  libraryId: number;

  @Column({type: 'int', nullable: true})
  bookId: number;

  @ManyToOne(() => Books, (book) => book.libraryBooks, {
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  })
  @JoinColumn({
    name: 'bookId',
    referencedColumnName: 'bookId',
  })
  book: Books;

  @ManyToOne(() => Library, (library) => library.libraryBooks, {
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  })
  @JoinColumn({
    name: 'libraryId',
    referencedColumnName: 'libraryId',
  })
  library: Library;
}
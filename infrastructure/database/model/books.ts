import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Authors } from './authors';
import { LibraryBooks } from './libraryBooks';

@Entity({ name: 'books' })
export class Books {
  @PrimaryGeneratedColumn({ type: 'int' })
  bookId: number;

  @Column({nullable: false})
  name: string;

  @Column({type: 'int', nullable: false})
  year: number;

  @Column({type: 'int', nullable: true})
  authorId: number;

  @ManyToOne(() => Authors, (authors) => authors.books, {
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  })
  @JoinColumn({
    name: 'authorId',
    referencedColumnName: 'authorId',
  })
  authors: Authors;

  @OneToMany(() => LibraryBooks, (libraryBooks) => libraryBooks.book, {
    cascade: true,
  })
  libraryBooks: LibraryBooks[];
}

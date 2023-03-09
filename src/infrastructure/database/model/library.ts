import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LibraryBooks } from './libraryBooks';

@Entity({ name: 'library' })
export class Library {
  @PrimaryGeneratedColumn({ type: 'int' })
  libraryId: number;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  address: string;

  @OneToMany(() => LibraryBooks, (libraryBooks) => libraryBooks.library, {
    cascade: true,
  })
  libraryBooks: LibraryBooks[];
}

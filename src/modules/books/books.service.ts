import { Injectable } from '@nestjs/common';
import { iBook } from 'src/types/book';
import { iUpdateBookDto } from './types/book-update';

@Injectable()
export class BooksService {
  delete(arg0: string) {
    throw new Error('Method not implemented.');
  }
  update(arg0: string, body: iUpdateBookDto) {
    throw new Error('Method not implemented.');
  }
  private readonly books: iBook[] = [];

  create(book: iBook) {
    this.books.push(book);
  }

  findAll(): iBook[] {
    return this.books;
  }
}

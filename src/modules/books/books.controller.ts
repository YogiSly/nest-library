import { Body, Controller, Get, Post } from '@nestjs/common';
import { iBook } from 'src/types/book';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: iBook) {
    this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<iBook[]> {
    return this.booksService.findAll();
  }
}

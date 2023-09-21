import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { iBook } from 'src/types/book';
import { IParamId } from 'src/types/param-id';
import { BooksService } from './books.service';
import { iCreateBookDto } from './types/book-create';
import { iUpdateBookDto } from './types/book-update';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: iCreateBookDto) {
    return await this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<iBook[]> {
    return await this.booksService.findAll();
  }

  @Put(':id')
  public update(@Param() { id }: IParamId, @Body() body: iUpdateBookDto) {
    return this.booksService.update(id as string, body);
  }

  @Delete(':id')
  public delete(@Param() { id }: IParamId) {
    return this.booksService.delete(id as string);
  }
}

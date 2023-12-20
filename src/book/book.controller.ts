import {
  Body,
  Controller,
  Delete,
  Get,
  Put,
  Param,
  Post,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class BookController {
  constructor(private BookService: BookService) {}

  @Get('getAllBook')
  getAllBook(): Book[] {
    return this.BookService.fetchAllBookService();
  }

  @Put('updateBook')
  updateBook(@Body() book: Book): string {
    return this.BookService.updateBookService(book);
  }

  @Delete('deletBook/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.BookService.deleteBookService(bookId);
  }

  @Post('addBook')
  addBook(@Body() book: Book): string {
    return this.BookService.addBookService(book);
  }

  @Get('/findBook/:id')
  findBook(@Param('id') id: number): string {
    console.log(id, typeof id);
    return 'fetch book By ID';
  }

  //pipe
  @Get('/:id')
  findBookById(@Param('id', ParseIntPipe) id: number): string {
    console.log(id, typeof id);
    return 'fetch book By ID';
  }

  @Post("/add")
  insertBook(@Body(new ValidationPipe()) book:Book):string{
    return "insert book"
  }
}

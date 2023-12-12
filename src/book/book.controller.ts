import { Body, Controller, Get, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller('book')
export class AuthController {
  constructor(private BookService: BookService) {}

  @Get('signup')
  addBook(): Book[] {
    return this.BookService.fetchAllBookService();
  }

  @Put('updateBook')
  updateBook(@Body() book: Book): string {
    return this.BookService.updateBookService(book);
  }
}

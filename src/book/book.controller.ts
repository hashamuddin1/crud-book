import {
  Body,
  Controller,
  Delete,
  Get,
  Put,
  Param,
  Post,
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
    console.log(book);
    return this.BookService.addBookService(book);
  }
}

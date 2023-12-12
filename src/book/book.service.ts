import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //add new book
  addBookService(book: Book): string {
    console.log(book)
    book.id = uuidv4();
    this.books.push(book);
    return 'Add New Book Successfully';
  }

  //update book
  updateBookService(book: Book): string {
    const bookIndex = this.books.findIndex((currentBook) => {
      return currentBook.id === book.id;
    });
    this.books[bookIndex] = book;
    return 'Book Has Been Updated Successfully';
  }

  //delete book
  deleteBookService(bookId: string): string {
    this.books = this.books.filter((Book) => {
      return Book.id !== bookId;
    });

    return 'Book has been Deleted Successfully';
  }

  //fetch All Books
  fetchAllBookService(): Book[] {
    console.log(this.books)
    return this.books;
  }
}

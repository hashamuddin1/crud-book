import { Book } from './data/book.dto';

export class BookService {
  public books: Book[] = [];

  //add new book
  addBookService(book: Book): string {
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
}

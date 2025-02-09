import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BookService{
    private Books:Book[] = [];

    getBooks(): Book[]{
        return this.Books
    }

    createBook(book:Book){
        this.Books.push(book)
    }

}
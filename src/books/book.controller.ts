import { Controller, Get } from '@nestjs/common';
import { BookService} from './book.service';
import { Book } from './book.interface';

@Controller('books')
export class BookController{
    constructor(private bookService: BookService) {}
    
    @Get()
    getBooks(): Book[]{
        return this.bookService.getBooks()
    }
   
}
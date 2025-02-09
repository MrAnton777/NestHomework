import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookService } from './books/book.service';
import { BookController } from './books/book.controller';

@Module({
  imports: [],
  controllers: [AppController,BookController],
  providers: [AppService,BookService],
})
export class AppModule {}

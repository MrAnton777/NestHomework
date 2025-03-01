import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BookModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:"root",
    password:"root",
    database:"test",
    entities:[],
    synchronize:true
  }),MongooseModule.forRoot("mongodb://example:example@localhost:27017/example")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

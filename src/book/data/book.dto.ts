import { IsString } from 'class-validator';

export class Book {
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  published: string;
}

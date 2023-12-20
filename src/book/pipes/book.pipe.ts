import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { Book } from '../data/book.dto';
import { plainToInstance } from 'class-transformer';

export class bookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    //Class transformer convert obj to class
    const bookClass = plainToInstance(Book, value);

    //apply class validation
    if (value.id === 1) return value;
    else throw new BadRequestException('Validation Failed');
  }
}

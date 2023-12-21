import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

export class bookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (value.id === 1) return value;
    else throw new BadRequestException({
      status:400,
      message:"This Value is not allowed"
    });
  }
}

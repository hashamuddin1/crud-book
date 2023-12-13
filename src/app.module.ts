import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BookModule,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

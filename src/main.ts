import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

const globalMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('This Is Global Middleware');
  next()
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware);
  await app.listen(3000);
}
bootstrap();

import {
    Body,
    Controller,
    Post,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { User } from './data/user.dto';
  
  @Controller('user')
  export class UserController {
    constructor(private UserService: UserService) {}
  
    @Post('addUser')
    addUser(@Body() user: User): string {
      return this.UserService.addUserService(user);
    }
  }
  
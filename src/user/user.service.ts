import { Injectable } from '@nestjs/common';
import { User } from './data/user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  public users: User[] = [];

  //add new User
  addUserService(user: User): string {
    user.id = uuidv4();
    this.users.push(user);
    return 'Add New User Successfully';
  }
  
}

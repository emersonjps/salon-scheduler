
import { Injectable } from '@nestjs/common';
import User from 'src/database/models/user.model';

@Injectable()
export class UsersService {
  constructor(
      private user: typeof User
  ) {}
  

  async create(user: User): Promise<User> {
    return this.user.create(user);
  }

  async findOne(email: string): Promise<User | null> {
    return this.user.findOne({ where: { email } });
  }
}

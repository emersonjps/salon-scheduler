
import { User } from '@common/models';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  async create(user: User): Promise<User> {
    return User.create(user);
  }

  async findOne(email: string): Promise<User | null> {
    return User.findOne({ where: { email } });
  }

  async saveUserImage( id: number, imageUrl: string): Promise<void> {
    // Aqui você salvaria `imageUrl` no banco de dados junto ao usuário
    User.update({ imageUrl }, { where: { id } });
  }
}

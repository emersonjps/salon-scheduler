import { Controller, Get, Inject, Post } from '@nestjs/common';
import { UserRepositoryConstants } from 'src/constants';
import User from 'src/database/models/user.model';

@Controller('users')
export class UsersController {
    // constructor(
    //     @Inject(UserRepositoryConstants.USER_REPOSITORY)
    //     private UserRepository: typeof User
    //   ) {}

    @Get()
    async findAll(): Promise<User | null> {
        return User.findOne({ where: { id: 1234 } });
    }

}

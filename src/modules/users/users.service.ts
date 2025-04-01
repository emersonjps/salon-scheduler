import { User } from '@common/models';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '@repositories/balance/user.repository';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) {}

    async create(user: User): Promise<User> {
        return this.userRepository.create(user);
    }

    async findOne(email: string): Promise<User | null> {
        return this.userRepository.findOne(email);
    }

    async saveImage(user_id: number, imageUrl: string): Promise<void> {
        await this.userRepository.updateImage(user_id, imageUrl);
    }

    async changePassword(user_id: number, password: string): Promise<void> {
        await this.userRepository.changePassword(user_id, password);
    }
}

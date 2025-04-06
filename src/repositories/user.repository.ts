import { User } from '@common/models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User)
        private user: typeof User,
    ) {}

    async create(user: User): Promise<User> {
        return await this.user.create(user);
    }

    async findOne(email: string): Promise<User | null> {
        return await this.user.findOne({ where: { email } });
    }

    async updateImage(user_id: number, imageUrl: string) {
        return await this.user.update({ imageUrl }, { where: { id: user_id } });
    }

    async changePassword(user_id: number, password: string) {
        return await this.user.update({ password }, { where: { id: user_id } });
    }
}

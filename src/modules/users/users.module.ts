import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { MinioService } from 'src/providers/minio.provider';
import { UserRepository } from '@repositories/user.repository';
import JwtUtils from '@utils/jwt-decode-token';

@Module({
    providers: [UsersService, MinioService, UserRepository, JwtUtils],
    controllers: [UserController],
    exports: [UsersService],
})
export class UsersModule {}

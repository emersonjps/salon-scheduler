import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { MinioService } from 'src/providers/minio.provider';

@Module({
    providers: [UsersService, MinioService],
    controllers: [UserController],
    exports: [UsersService],
})
export class UsersModule {}


import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
// import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [],
})
export class UsersModule {}

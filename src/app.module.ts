import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { TimeGridModule } from './timegrid/timegrid.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, TimeGridModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

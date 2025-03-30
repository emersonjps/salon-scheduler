import { Module } from '@nestjs/common';
import { AppConfigModule } from 'config/config.module';
import { DatabaseModule } from 'database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@modules/users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [ConfigModule.forRoot(), AppConfigModule, DatabaseModule, AuthModule, UsersModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppConfigModule } from 'config/config.module';
import { DatabaseModule } from 'database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@modules/users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
    imports: [ConfigModule.forRoot(), AppConfigModule, DatabaseModule, AuthModule, UsersModule],
    providers: [
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
})
export class AppModule {}

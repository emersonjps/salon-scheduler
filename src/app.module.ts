import { Module } from '@nestjs/common';
import { AppConfigModule } from 'config/config.module';
import { DatabaseModule } from 'database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@modules/users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ScheduleModule } from '@modules/schedule/schedule.module';
import { HolidayModule } from '@modules/holiday/holiday.module';
import { TimeSlotModule } from '@modules/time-slot/time-slot.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        AppConfigModule,
        DatabaseModule,
        AuthModule,
        UsersModule,
        ScheduleModule,
        HolidayModule,
        TimeSlotModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
})
export class AppModule {}

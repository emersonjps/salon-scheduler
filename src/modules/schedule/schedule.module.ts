import { Schedule, User } from '@common/models';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { ScheduleRepository } from '@repositories/schedule.repository';

@Module({
    imports: [SequelizeModule.forFeature([Schedule, User])],
    controllers: [ScheduleController],
    providers: [ScheduleService, ScheduleRepository],
})
export class ScheduleModule {}

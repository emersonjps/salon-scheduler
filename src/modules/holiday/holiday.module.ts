import { Holiday } from '@common/models';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HolidayController } from './holiday.controller';
import { HolidayService } from './holiday.service';
import { HolidayRepository } from '@repositories/holiday.repository';

@Module({
    imports: [SequelizeModule.forFeature([Holiday])],
    controllers: [HolidayController],
    providers: [HolidayService, HolidayRepository],
})
export class HolidayModule {}

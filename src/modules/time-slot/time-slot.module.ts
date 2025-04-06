import { Module } from '@nestjs/common';
import { TimeSlotService } from './time-slot.service';
import { TimeSlotController } from './time-slot.controller';
import { timeSlotRepository } from '@repositories/time-slot.repository';

@Module({
    controllers: [TimeSlotController],
    providers: [TimeSlotService, timeSlotRepository],
})
export class TimeSlotModule {}

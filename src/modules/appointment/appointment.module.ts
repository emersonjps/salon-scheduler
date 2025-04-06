import { Module } from '@nestjs/common';
import { AppointmentRepository } from '@repositories/appointment.repository';
import { AppointmentsController } from './appointment.controller';
import { AppointmentsService } from './appointment.service';

@Module({
    controllers: [AppointmentsController],
    providers: [AppointmentsService, AppointmentRepository],
})
export class AppointmentsModule {}

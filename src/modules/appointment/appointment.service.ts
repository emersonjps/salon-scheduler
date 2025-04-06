import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentRepository } from '@repositories/appointment.repository';

@Injectable()
export class AppointmentsService {
    constructor(private readonly appointmentRepository: AppointmentRepository) {}

    create(data: CreateAppointmentDto) {
        return this.appointmentRepository.create(data);
    }

    findAll() {
        return this.appointmentRepository.findAll();
    }

    findOne(id: number) {
        return this.appointmentRepository.findByPk(id);
    }

    update(id: number, data: UpdateAppointmentDto) {
        return this.appointmentRepository.update(data, { where: { id } });
    }

    remove(id: number) {
        return this.appointmentRepository.destroy({ where: { id } });
    }
}

import { Appointment } from '@common/models';
import { CreateAppointmentDto } from '@modules/appointment/dto/create-appointment.dto';
import { UpdateAppointmentDto } from '@modules/appointment/dto/update-appointment.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AppointmentRepository {
    constructor(
        @InjectModel(Appointment)
        private appointment: typeof Appointment,
    ) {}

    async create(appointment: CreateAppointmentDto): Promise<Appointment> {
        const appointmentData = {
            ...appointment,
            appointment_date: new Date(appointment.appointment_date),
        };
        return this.appointment.create(appointmentData as Partial<Appointment>);
    }

    async findAll(options?: { include: { all: true } }): Promise<Appointment[]> {
        return this.appointment.findAll(options);
    }

    async findByPk(id: number): Promise<Appointment> {
        return this.appointment.findByPk(id);
    }

    async update(appointment: UpdateAppointmentDto, options: { where: { id: number } }): Promise<[number]> {
        return this.appointment.update(appointment, options);
    }

    async destroy(options: { where: { id } }): Promise<number> {
        return this.appointment.destroy(options);
    }
}

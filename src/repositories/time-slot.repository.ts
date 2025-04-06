import { TimeSlot } from '@common/models';
import { CreateTimeSlotDto } from '@modules/time-slot/dto/create-time-slot.dto';
import { UpdateTimeSlotDto } from '@modules/time-slot/dto/update-time-slot.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class timeSlotRepository {
    constructor(
        @InjectModel(TimeSlot)
        private timeSlot: typeof TimeSlot,
    ) {}

    async create(timeSlot: CreateTimeSlotDto): Promise<TimeSlot> {
        return this.timeSlot.create(timeSlot as Partial<TimeSlot>);
    }

    async findAll(options?: { include: { all: true } }): Promise<TimeSlot[]> {
        return this.timeSlot.findAll(options);
    }

    async findByPk(id: number): Promise<TimeSlot> {
        return this.timeSlot.findByPk(id);
    }

    async update(timeSlot: UpdateTimeSlotDto, options: { where: { id: number } }): Promise<[number]> {
        return this.timeSlot.update(timeSlot, options);
    }

    async detroy(options: { where: { id } }): Promise<number> {
        return this.timeSlot.destroy(options);
    }
}

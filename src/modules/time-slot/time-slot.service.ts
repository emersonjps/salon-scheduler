import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTimeSlotDto } from './dto/create-time-slot.dto';
import { UpdateTimeSlotDto } from './dto/update-time-slot.dto';
import { timeSlotRepository } from '@repositories/time-slot.repository';

@Injectable()
export class TimeSlotService {
    constructor(private readonly timeSlotRepository: timeSlotRepository) {}

    async create(dto: CreateTimeSlotDto) {
        return this.timeSlotRepository.create(dto);
    }

    async findAll() {
        return this.timeSlotRepository.findAll();
    }

    async findOne(id: number) {
        const timeSlot = await this.timeSlotRepository.findByPk(id);
        if (!timeSlot) throw new NotFoundException('TimeSlot not found');
        return timeSlot;
    }

    async update(id: number, dto: UpdateTimeSlotDto) {
        return this.timeSlotRepository.update(dto, { where: { id } });
    }

    async remove(id: number) {
        await this.timeSlotRepository.detroy({ where: { id } });
        return { message: 'TimeSlot deleted successfully' };
    }
}

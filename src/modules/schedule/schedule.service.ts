import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ScheduleRepository } from '@repositories/schedule.repository';

@Injectable()
export class ScheduleService {
    constructor(private readonly scheduleRepository: ScheduleRepository) {}

    async create(createScheduleDto: CreateScheduleDto) {
        return this.scheduleRepository.create(createScheduleDto);
    }

    async findAll() {
        return this.scheduleRepository.findAll({ include: { all: true } });
    }

    async findOne(id: number) {
        const schedule = await this.scheduleRepository.findByPk(id);
        if (!schedule) {
            throw new NotFoundException('Schedule not found');
        }
        return schedule;
    }

    async update(id: number, updateScheduleDto: UpdateScheduleDto) {
        return this.scheduleRepository.update(updateScheduleDto, { where: { id } });
    }

    async remove(id: number) {
        await this.scheduleRepository.destroy({ where: { id } });
        return { message: 'Schedule deleted successfully' };
    }
}

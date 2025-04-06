import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { HolidayRepository } from '@repositories/holiday.repository';

@Injectable()
export class HolidayService {
    constructor(private readonly holidayRepository: HolidayRepository) {}

    create(dto: CreateHolidayDto) {
        return this.holidayRepository.create(dto);
    }

    findAll() {
        return this.holidayRepository.findAll();
    }

    async findOne(id: number) {
        const holiday = await this.holidayRepository.findByPk(id);
        if (!holiday) throw new NotFoundException('Holiday not found');
        return holiday;
    }

    async update(id: number, dto: UpdateHolidayDto) {
        return this.holidayRepository.update(dto, { where: { id } });
    }

    async remove(id: number) {
        await this.holidayRepository.detroy({ where: { id } });
        return { message: 'Holiday deleted successfully' };
    }
}

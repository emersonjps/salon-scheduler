import { Holiday } from '@common/models';
import { CreateHolidayDto } from '@modules/holiday/dto/create-holiday.dto';
import { UpdateHolidayDto } from '@modules/holiday/dto/update-holiday.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class HolidayRepository {
    constructor(
        @InjectModel(Holiday)
        private holidayModel: typeof Holiday,
    ) {}

    async create(holiday: CreateHolidayDto): Promise<Holiday> {
        return this.holidayModel.create(holiday as Partial<Holiday>);
    }

    async findAll(options?: { include: { all: true } }): Promise<Holiday[]> {
        return this.holidayModel.findAll(options);
    }

    async findByPk(id: number): Promise<Holiday> {
        return this.holidayModel.findByPk(id);
    }

    async update(holiday: UpdateHolidayDto, options: { where: { id: number } }): Promise<[number]> {
        return this.holidayModel.update(holiday, options);
    }

    async detroy(options: { where: { id } }): Promise<number> {
        return this.holidayModel.destroy(options);
    }
}

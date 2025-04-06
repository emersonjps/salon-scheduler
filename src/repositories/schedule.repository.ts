import { Schedule } from '@common/models';
import { CreateScheduleDto } from '@modules/schedule/dto/create-schedule.dto';
import { UpdateScheduleDto } from '@modules/schedule/dto/update-schedule.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ScheduleRepository {
    constructor(
        @InjectModel(Schedule)
        private scheduleModel: typeof Schedule,
    ) {}

    async create(schedule: CreateScheduleDto): Promise<Schedule> {
        return this.scheduleModel.create(schedule as Partial<Schedule>);
    }

    async findAll(options?: { include: { all: true } }): Promise<Schedule[]> {
        return this.scheduleModel.findAll(options);
    }

    async findByPk(id: number): Promise<Schedule> {
        return this.scheduleModel.findByPk(id);
    }

    async update(schedule: UpdateScheduleDto, options: { where: { id: number } }): Promise<[number]> {
        return this.scheduleModel.update(schedule, options);
    }

    async destroy(options: { where: { id } }): Promise<number> {
        return this.scheduleModel.destroy(options);
    }
}

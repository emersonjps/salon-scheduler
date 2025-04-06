import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Controller('schedules')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) {}

    @Post()
    create(@Body() dto: CreateScheduleDto) {
        return this.scheduleService.create(dto);
    }

    @Get()
    findAll() {
        return this.scheduleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.scheduleService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateScheduleDto) {
        return this.scheduleService.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.scheduleService.remove(+id);
    }
}

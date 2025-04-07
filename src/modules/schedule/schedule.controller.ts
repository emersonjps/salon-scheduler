import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/auth/constants/User.Roles';

@ApiTags('schedules')
@Controller('schedules')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) {}

    @Post()
    @Roles(UserRole.PROFESSIONAL, UserRole.ADMIN)
    @ApiBody({ type: CreateScheduleDto })
    create(@Body() dto: CreateScheduleDto) {
        return this.scheduleService.create(dto);
    }

    @Get()
    @Roles(UserRole.ADMIN)
    findAll() {
        return this.scheduleService.findAll();
    }

    @Get(':id')
    @Roles(UserRole.PROFESSIONAL, UserRole.ADMIN)
    @ApiParam({ name: 'id', type: 'number', description: 'Schedule ID to find' })
    findOne(@Param('id') id: string) {
        return this.scheduleService.findOne(+id);
    }

    @Patch(':id')
    @Roles(UserRole.PROFESSIONAL, UserRole.ADMIN)
    @ApiParam({ name: 'id', type: 'number', description: 'Schedule ID to update' })
    update(@Param('id') id: string, @Body() dto: UpdateScheduleDto) {
        return this.scheduleService.update(+id, dto);
    }

    @Delete(':id')
    @Roles(UserRole.PROFESSIONAL, UserRole.ADMIN)
    @ApiParam({ name: 'id', type: 'number', description: 'Schedule ID to delete' })
    @ApiBody({ type: Number })
    remove(@Param('id') id: string) {
        return this.scheduleService.remove(+id);
    }
}

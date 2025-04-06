import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentsService } from './appointment.service';

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) {}

    @Post()
    create(@Body() dto: CreateAppointmentDto) {
        return this.appointmentsService.create(dto);
    }

    @Get()
    findAll() {
        return this.appointmentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.appointmentsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateAppointmentDto) {
        return this.appointmentsService.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.appointmentsService.remove(+id);
    }
}

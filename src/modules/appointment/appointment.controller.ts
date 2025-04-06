import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentsService } from './appointment.service';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('appointments')
@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) {}

    @Post()
    @ApiBody({ type: CreateAppointmentDto })
    create(@Body() dto: CreateAppointmentDto) {
        return this.appointmentsService.create(dto);
    }

    @Get()
    findAll() {
        return this.appointmentsService.findAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        type: Number,
        description: 'ID do agendamento para busca',
        example: 123,
    })
    findOne(@Param('id') id: string) {
        return this.appointmentsService.findOne(+id);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        type: Number,
        description: 'ID do agendamento para atualização',
        example: 123,
    })
    @ApiBody({ type: UpdateAppointmentDto })
    update(@Param('id') id: string, @Body() dto: UpdateAppointmentDto) {
        return this.appointmentsService.update(+id, dto);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        type: Number,
        description: 'ID do agendamento para remoção',
        example: 123,
    })
    remove(@Param('id') id: string) {
        return this.appointmentsService.remove(+id);
    }
}

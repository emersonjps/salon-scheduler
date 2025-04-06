import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { TimeSlotService } from './time-slot.service';
import { CreateTimeSlotDto } from './dto/create-time-slot.dto';
import { UpdateTimeSlotDto } from './dto/update-time-slot.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('time-slots')
@Controller('time-slots')
export class TimeSlotController {
    constructor(private readonly service: TimeSlotService) {}

    @Post()
    @ApiBody({ type: CreateTimeSlotDto })
    create(@Body() dto: CreateTimeSlotDto) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    @ApiParam({ name: 'id', type: 'number', description: 'TimeSlot ID to find' })
    findOne(@Param('id') id: string) {
        return this.service.findOne(+id);
    }

    @Patch(':id')
    @ApiParam({ name: 'id', type: 'number', description: 'TimeSlot ID to update' })
    update(@Param('id') id: string, @Body() dto: UpdateTimeSlotDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', type: 'number', description: 'TimeSlot ID to delete' })
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}

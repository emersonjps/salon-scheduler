import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { TimeSlotService } from './time-slot.service';
import { CreateTimeSlotDto } from './dto/create-time-slot.dto';
import { UpdateTimeSlotDto } from './dto/update-time-slot.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/auth/constants/User.Roles';

@ApiTags('time-slots')
@Controller('time-slots')
export class TimeSlotController {
    constructor(private readonly service: TimeSlotService) {}

    @Post()
    @Roles(UserRole.PROFESSIONAL, UserRole.ADMIN)
    @ApiBody({ type: CreateTimeSlotDto })
    create(@Body() dto: CreateTimeSlotDto) {
        return this.service.create(dto);
    }

    @Get()
    @Roles(UserRole.PROFESSIONAL, UserRole.ADMIN)
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    @Roles(UserRole.PROFESSIONAL, UserRole.ADMIN)
    @ApiParam({ name: 'id', type: 'number', description: 'TimeSlot ID to find' })
    findOne(@Param('id') id: string) {
        return this.service.findOne(+id);
    }

    @Patch(':id')
    @Roles(UserRole.PROFESSIONAL, UserRole.ADMIN)
    @ApiParam({ name: 'id', type: 'number', description: 'TimeSlot ID to update' })
    update(@Param('id') id: string, @Body() dto: UpdateTimeSlotDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    @Roles(UserRole.PROFESSIONAL, UserRole.ADMIN)
    @ApiParam({ name: 'id', type: 'number', description: 'TimeSlot ID to delete' })
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}

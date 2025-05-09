import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/auth/constants/User.Roles';

@ApiTags('holidays')
@Controller('holidays')
export class HolidayController {
    constructor(private readonly service: HolidayService) {}

    @Post()
    @Roles(UserRole.ADMIN)
    @ApiBody({ type: CreateHolidayDto })
    create(@Body() dto: CreateHolidayDto) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    @ApiParam({ name: 'id', type: 'number', description: 'Holiday ID para buscar' })
    findOne(@Param('id') id: string) {
        return this.service.findOne(+id);
    }

    @Patch(':id')
    @Roles(UserRole.ADMIN)
    @ApiParam({ name: 'id', type: 'number', description: 'Holiday ID para atualizar' })
    update(@Param('id') id: string, @Body() dto: UpdateHolidayDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    @Roles(UserRole.ADMIN)
    @ApiParam({ name: 'id', type: 'number', description: 'Holiday ID para deletar' })
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}

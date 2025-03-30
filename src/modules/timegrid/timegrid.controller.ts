import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TimeGridService } from './timegrid.service';
import { CreateTimeGridDto } from './dto/create-timegrid.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateTimeGridDto } from './dto/update-timegrid.dto';

@Controller('timegrid')
export class TimeGridController {
  constructor(private readonly TimeGridService: TimeGridService) {}

  // @Post()
  // @UseGuards(AuthGuard)
  // create(@Body() createScheduleDto: CreateTimeGridDto) {
  //   return this.TimeGridService.create(createScheduleDto);
  // }

  // @Get()
  // findAll() {
  //   return this.TimeGridService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.TimeGridService.findOne(+id);
  // }

  // @Patch(':id')
  // @UseGuards(AuthGuard)
  // update(@Param('id') id: string, @Body() updateScheduleDto: UpdateTimeGridDto) {
  //   return this.TimeGridService.update(+id, updateScheduleDto);
  // }

  // @Delete(':id')
  // @UseGuards(AuthGuard)
  // remove(@Param('id') id: string) {
  //   return this.TimeGridService.remove(+id);
  // }
}

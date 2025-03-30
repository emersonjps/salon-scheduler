import { Module } from '@nestjs/common';
import { TimeGridService } from './timegrid.service';
import { TimeGridController } from './timegrid.controller';

@Module({
  controllers: [TimeGridController],
  providers: [TimeGridService],
})
export class TimeGridModule {}

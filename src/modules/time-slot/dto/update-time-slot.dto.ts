import { ApiProperty } from '@nestjs/swagger';

export class UpdateTimeSlotDto {
    @ApiProperty({ description: 'The start time of the time slot.', example: '09:00', required: false })
    start_time?: string;

    @ApiProperty({ description: 'The end time of the time slot.', example: '17:00', required: false })
    end_time?: string;
}

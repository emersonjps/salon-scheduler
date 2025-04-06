import { ApiProperty } from '@nestjs/swagger';

export class CreateTimeSlotDto {
    @ApiProperty({
        description: 'The ID of the schedule to which this time slot belongs.',
        example: 1,
    })
    schedule_id: number;

    @ApiProperty({
        description: 'The start time of the time slot in HH:mm format.',
        example: '09:00',
    })
    start_time: string;

    @ApiProperty({
        description: 'The end time of the time slot in HH:mm format.',
        example: '09:30',
    })
    end_time: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
    @ApiProperty({
        description: 'The ID of the user associated with the schedule.',
        example: 1,
    })
    user_id: number;

    @ApiProperty({
        description: 'The start date and time of the schedule.',
        example: '2023-10-01T09:00:00Z',
    })
    start_date: Date;

    @ApiProperty({
        description: 'The end date and time of the schedule.',
        example: '2023-10-01T10:00:00Z',
    })
    end_date: Date;

    @ApiProperty({
        description: 'An optional description of the schedule.',
        example: 'Haircut appointment',
        required: false,
    })
    description?: string;
}

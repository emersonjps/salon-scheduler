import { ApiProperty } from '@nestjs/swagger';

export class UpdateScheduleDto {
    @ApiProperty({ description: 'The start date of the schedule.', required: false })
    start_date?: Date;

    @ApiProperty({ description: 'The end date of the schedule.', required: false })
    end_date?: Date;

    @ApiProperty({ description: 'A brief description of the schedule.', required: false })
    description?: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class UpdateAppointmentDto {
    @ApiProperty({ description: 'The date of the appointment', required: false })
    appointment_date?: string;

    @ApiProperty({ description: 'The start time of the appointment', required: false })
    start_time?: string;

    @ApiProperty({ description: 'The end time of the appointment', required: false })
    end_time?: string;

    @ApiProperty({ description: 'The status of the appointment', required: false })
    status?: string;
}

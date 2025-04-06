import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDto {
    @ApiProperty({
        description: 'ID of the client associated with the appointment.',
        example: 1,
    })
    client_id: number;

    @ApiProperty({
        description: 'ID of the professional associated with the appointment.',
        example: 2,
    })
    professional_id: number;

    @ApiProperty({
        description: "Date of the appointment in the format 'YYYY-MM-DD'.",
        example: '2023-10-15',
    })
    appointment_date: string;

    @ApiProperty({
        description: "Start time of the appointment in the format 'HH:mm'.",
        example: '09:00',
    })
    start_time: string;

    @ApiProperty({
        description: "End time of the appointment in the format 'HH:mm'.",
        example: '10:00',
    })
    end_time: string;

    @ApiProperty({
        description: 'Status of the appointment (optional).',
        example: 'confirmed',
        required: false,
    })
    status?: string;
}

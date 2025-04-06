import { ApiProperty } from '@nestjs/swagger';

export class UpdateHolidayDto {
    @ApiProperty({
        description: 'The date of the holiday.',
        example: '2023-12-25',
        required: false,
    })
    holiday_date?: Date;

    @ApiProperty({
        description: 'The name of the holiday.',
        example: 'Christmas',
        required: false,
    })
    name?: string;
}

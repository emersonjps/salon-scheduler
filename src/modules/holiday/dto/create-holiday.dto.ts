import { ApiProperty } from '@nestjs/swagger';

export class CreateHolidayDto {
    @ApiProperty({ description: 'The date of the holiday.', example: '2023-12-25' })
    holiday_date: Date;

    @ApiProperty({ description: 'The name of the holiday.', example: 'Christmas' })
    name: string;
}

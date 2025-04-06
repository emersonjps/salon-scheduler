import { ApiProperty } from '@nestjs/swagger';

export default class UserAuthDto {
    @ApiProperty({
        description: 'The email address of the user.',
        example: 'user@example.com',
    })
    email: string;

    @ApiProperty({
        description: 'The password of the user.',
        example: 'securePassword123',
    })
    password: string;
}

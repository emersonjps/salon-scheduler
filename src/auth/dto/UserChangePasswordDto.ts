import { User } from '@common/models';
import { ApiProperty } from '@nestjs/swagger';

export default class UserChangePasswordDto extends User {
    @ApiProperty({
        description: 'The full name of the user.',
        example: 'John Doe',
    })
    name: string;

    @ApiProperty({
        description: 'The email address of the user.',
        example: 'johndoe@example.com',
    })
    email: string;

    @ApiProperty({
        description: 'The new password for the user.',
        example: 'StrongP@ssw0rd!',
    })
    password: string;
}

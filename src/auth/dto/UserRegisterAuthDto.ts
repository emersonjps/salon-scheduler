import { User } from '@common/models';
import { UserRole } from '../constants/User.Roles';
import { ApiProperty } from '@nestjs/swagger';

export default class UserRegisterAuthDto extends User {
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
        description: "The password for the user's account.",
        example: 'StrongPassword123!',
    })
    password: string;

    @ApiProperty({
        description: 'The role assigned to the user.',
        example: UserRole.ADMIN,
    })
    role: UserRole;
}

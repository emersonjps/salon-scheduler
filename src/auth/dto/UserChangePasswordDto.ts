import { User } from '@common/models';

export default interface UserChangePasswordDto extends User {
    name: string;
    email: string;
    password: string;
}

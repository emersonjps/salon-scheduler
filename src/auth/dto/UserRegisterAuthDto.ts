import { User } from '@common/models';
import { UserRole } from '../constants/User.Roles';

export default interface UserRegisterAuthDto extends User {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

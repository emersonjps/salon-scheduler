import { User } from '@common/models';

export default interface UserRegisterAuthDto extends User {
    name: string;
    email: string;
    password: string;
}

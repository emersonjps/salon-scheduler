import User from "src/database/models/user.model";

export default interface UserRegisterAuthDto extends User {
    name: string;
    email: string;
    password: string;
}

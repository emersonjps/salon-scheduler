import { UserRepositoryConstants } from "src/constants";
import User from "../models/user.model";

export const UserProviders = [
  {
    provide: UserRepositoryConstants.USER_REPOSITORY,
    useValue: User,
  },
];

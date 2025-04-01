import { User } from '@common/models';
import { UserRepositoryConstants } from 'src/constants';

export const UserProviders = [
    {
        provide: UserRepositoryConstants.USER_REPOSITORY,
        useValue: User,
    },
];

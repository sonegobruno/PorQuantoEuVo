import { User } from '../../entities/User';

export interface IUsersRepository {
   list(): Promise<User[]>;
}
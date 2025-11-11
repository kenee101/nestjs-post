import { CreateUserDto } from './../dtos/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';
import { FindOneByGoogleIdProvider } from './find-one-by-google-id.provider';
import { CreateGoogleUserProvider } from './create-google-user.provider';
import { GoogleUser } from '../interfaces/google-user.inerface';
export declare class UsersService {
    private usersRepository;
    private readonly usersCreateManyProvider;
    private readonly createUserProvider;
    private readonly findOneUserByEmailProvider;
    private readonly findOneByGoogleIdProvider;
    private readonly createGooogleUserProvider;
    constructor(usersRepository: Repository<User>, usersCreateManyProvider: UsersCreateManyProvider, createUserProvider: CreateUserProvider, findOneUserByEmailProvider: FindOneUserByEmailProvider, findOneByGoogleIdProvider: FindOneByGoogleIdProvider, createGooogleUserProvider: CreateGoogleUserProvider);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(limit: number, page: number): Promise<User[]>;
    findOneById(id: number): Promise<any>;
    createMany(createManyUsersDto: CreateManyUsersDto): Promise<User[]>;
    findOneByEmail(email: string): Promise<User>;
    findOneByGoogleId(googleId: string): Promise<User>;
    createGoogleUser(googleUser: GoogleUser): Promise<User>;
}

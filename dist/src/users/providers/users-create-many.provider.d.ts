import { CreateManyUsersDto } from '../dtos/create-many-users.dto';
import { DataSource } from 'typeorm';
import { User } from '../user.entity';
export declare class UsersCreateManyProvider {
    private dataSource;
    constructor(dataSource: DataSource);
    createMany(createManyUsersDto: CreateManyUsersDto): Promise<User[]>;
}

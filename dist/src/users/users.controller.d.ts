import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { CreateManyUsersDto } from './dtos/create-many-users.dto';
import { User } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserById(getUsersParamDto: GetUsersParamDto): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    createManyUsers(createManyUsersDto: CreateManyUsersDto): Promise<User[]>;
    patchUser(patchUserDto: PatchUserDto): PatchUserDto;
}

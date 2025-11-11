import { Repository } from 'typeorm';
import { User } from '../user.entity';
export declare class FindOneUserByEmailProvider {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findOneByEmail(email: string): Promise<User>;
}

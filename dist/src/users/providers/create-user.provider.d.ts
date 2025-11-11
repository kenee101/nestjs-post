import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { MailService } from 'src/mail/providers/mail.service';
export declare class CreateUserProvider {
    private usersRepository;
    private readonly hashingProvider;
    private readonly mailService;
    constructor(usersRepository: Repository<User>, hashingProvider: HashingProvider, mailService: MailService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}

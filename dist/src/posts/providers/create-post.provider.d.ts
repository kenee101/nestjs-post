import { CreatePostDto } from '../dtos/create-post.dto';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';
export declare class CreatePostProvider {
    private readonly usersService;
    private readonly postsRepository;
    private readonly tagsService;
    constructor(usersService: UsersService, postsRepository: Repository<Post>, tagsService: TagsService);
    create(createPostDto: CreatePostDto, user: ActiveUserData): Promise<Post>;
}

import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { GetPostsDto } from '../dtos/get-post.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';
import { CreatePostProvider } from './create-post.provider';
export declare class PostsService {
    private readonly postsRepository;
    private readonly metaOptionsRepository;
    private readonly tagsService;
    private readonly paginationProvider;
    private readonly createPostProvider;
    constructor(postsRepository: Repository<Post>, metaOptionsRepository: Repository<MetaOption>, tagsService: TagsService, paginationProvider: PaginationProvider, createPostProvider: CreatePostProvider);
    create(createPostDto: CreatePostDto, user: ActiveUserData): Promise<Post>;
    findAll(postQuery: GetPostsDto, userId: string): Promise<Paginated<Post>>;
    update(patchPostDto: PatchPostDto): Promise<any>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}

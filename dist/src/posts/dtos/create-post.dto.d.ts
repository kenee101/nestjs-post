import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
import { postStatus } from '../enums/postStatus.enum';
import { postType } from '../enums/postType.enum';
export declare class CreatePostDto {
    title: string;
    postType: postType;
    slug: string;
    status: postStatus;
    content?: string;
    schema?: string;
    featuredImageUrl?: string;
    publishOn?: Date;
    tags?: number[];
    metaOptions?: CreatePostMetaOptionsDto | null;
}

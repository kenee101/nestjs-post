import { Post } from 'src/posts/post.entity';
export declare class Tag {
    id: number;
    name: string;
    slug: string;
    description: string;
    schema: string;
    featuredImage: string;
    posts: Post[];
    createDate: Date;
    updateDate: Date;
    deletedAt: Date;
}

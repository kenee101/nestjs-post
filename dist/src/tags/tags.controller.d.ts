import { CreateTagDto } from './dtos/create-tag.dto';
import { TagsService } from './providers/tags.service';
import { Tag } from './tag.entity';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(createTagDto: CreateTagDto): Promise<Tag>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
    softDelete(id: number): Promise<{
        softDeleted: boolean;
        id: number;
    }>;
}

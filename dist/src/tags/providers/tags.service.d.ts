import { Repository } from 'typeorm';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Tag } from '../tag.entity';
export declare class TagsService {
    private readonly tagsRepository;
    constructor(tagsRepository: Repository<Tag>);
    create(createTagDto: CreateTagDto): Promise<Tag>;
    findMultipleTags(tags: number[]): Promise<Tag[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
    softRemove(id: number): Promise<{
        softDeleted: boolean;
        id: number;
    }>;
}

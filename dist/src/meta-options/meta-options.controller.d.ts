import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';
export declare class MetaOptionsController {
    private readonly MetaOptionsService;
    constructor(MetaOptionsService: MetaOptionsService);
    create(createPostMetaOptionsDto: CreatePostMetaOptionsDto): Promise<import("./meta-option.entity").MetaOption>;
}

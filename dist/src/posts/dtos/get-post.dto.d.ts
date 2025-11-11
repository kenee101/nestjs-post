import { PaginationQueryDto } from 'src/common/pagination/dtos/pagination-query.dto';
declare class GetPostsBaseDto {
    startDate?: Date;
    endDate?: Date;
}
declare const GetPostsDto_base: import("@nestjs/common").Type<PaginationQueryDto & GetPostsBaseDto>;
export declare class GetPostsDto extends GetPostsDto_base {
}
export {};

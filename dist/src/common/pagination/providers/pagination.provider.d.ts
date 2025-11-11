import { ObjectLiteral } from 'typeorm';
import { Paginated } from '../interfaces/paginated.interface';
import { PaginationQueryDto } from '../dtos/pagination-query.dto';
import { Repository } from 'typeorm';
import { Request } from 'express';
export declare class PaginationProvider {
    private readonly request;
    constructor(request: Request);
    paginateQuery<T extends ObjectLiteral>(paginationQuery: PaginationQueryDto, repository: Repository<T>): Promise<Paginated<T>>;
}

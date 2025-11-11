import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTagDto } from './dtos/create-tag.dto';
import { TagsService } from './providers/tags.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { Tag } from './tag.entity';

@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(
    /**
     * Inject  tagsService
     */
    private readonly tagsService: TagsService,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Create a new tag' })
  @ApiResponse({
    status: 201,
    description: 'Tag created successfully',
    type: Tag,
  })
  @ApiBody({ type: CreateTagDto })
  public create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete a tag' })
  @ApiResponse({ status: 200, description: 'Tag deleted successfully' })
  public delete(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.delete(id);
  }

  @Delete('soft-delete')
  @ApiOperation({ summary: 'Soft delete a tag' })
  @ApiResponse({ status: 200, description: 'Tag soft deleted successfully' })
  public softDelete(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.softRemove(id);
  }
}

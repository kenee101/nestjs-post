import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Meta Options')
@Controller('meta-options')
export class MetaOptionsController {
  constructor(
    /**
     * Inject MetaOptionsService
     * */
    private readonly MetaOptionsService: MetaOptionsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new meta option' })
  @ApiResponse({ status: 201, description: 'Meta option created successfully' })
  @ApiBody({ type: CreatePostMetaOptionsDto })
  public async create(
    @Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ) {
    return this.MetaOptionsService.create(createPostMetaOptionsDto);
  }
}

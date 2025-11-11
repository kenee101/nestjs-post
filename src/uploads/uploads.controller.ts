import {
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadsService } from './providers/uploads.service';
// import { Auth } from 'src/auth/decorators/auth.decorator';
// import { AuthType } from 'src/auth/enums/auth-type.enum';
// import { ApiFile } from './decorators/api-file.decorator';

@ApiTags('Uploads')
// @Auth(AuthType.None)
@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload a file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'The file to upload (PNG, JPG, JPEG, PDF up to 5MB)',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'File uploaded successfully',
    schema: {
      type: 'object',
      properties: {
        filename: { type: 'string' },
        path: { type: 'string' },
        mimeType: { type: 'string' },
        size: { type: 'number' },
        textContent: { type: 'string', nullable: true },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Invalid file type or size' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Failed to process file' })
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.uploadsService.uploadFile(file);
  }
}

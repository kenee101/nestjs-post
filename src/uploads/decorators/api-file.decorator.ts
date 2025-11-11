import { applyDecorators } from '@nestjs/common';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';

export function ApiFile() {
  return applyDecorators(
    ApiConsumes('multipart/form-data'),
    ApiBody({
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
  );
}

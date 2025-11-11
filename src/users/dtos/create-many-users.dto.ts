import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Type } from 'class-transformer';

export class CreateManyUsersDto {
  @ApiProperty({
    type: 'array',
    required: true,
    items: {
      type: 'object',
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
      },
    },
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  users: CreateUserDto[];
}

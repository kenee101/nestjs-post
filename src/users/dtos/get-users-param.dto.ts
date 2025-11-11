import { IsInt, IsOptional } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetUsersParamDto {
  @ApiProperty({
    description: 'Get user with a specific id',
    example: 1,
  })
  // @IsOptional()
  @IsInt()
  @Type(() => Number)
  id: number;
}

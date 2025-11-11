import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    description: 'User email address',
    example: 'mark15@doe.com',
    default: 'mark15@doe.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'User password (min 8 characters)',
    example: 'Password123#',
    default: 'Password123#',
  })
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}

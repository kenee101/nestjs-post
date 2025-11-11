import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'First name of the user',
    example: 'rick',
    default: 'rick',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
    example: 'smith',
    default: 'smith',
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName?: string;

  @ApiProperty({
    description: 'Email address of the user',
    example: 'rick@doe.com',
    default: 'rick@doe.com',
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(96)
  email: string;

  @ApiProperty({
    description: 'Password of the user',
    example: 'Password123#',
    default: 'Password123#',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(96)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'Minimum eight characters, at least one letter, one number and one special character',
  })
  password: string;
}

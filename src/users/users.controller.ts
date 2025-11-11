import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  UseInterceptors,
  ClassSerializerInterceptor,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import {
  ApiTags,
  ApiQuery,
  ApiOperation,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { CreateManyUsersDto } from './dtos/create-many-users.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';
import { User } from './user.entity';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    // Injecting Users Service
    private readonly usersService: UsersService,
  ) {}

  @Get('/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({
    summary: 'Fetch registered user on the application',
  })
  @ApiResponse({
    status: 200,
    description: 'User fetched successfully based on the query',
    type: User,
    example: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    },
  })
  // @ApiQuery({
  //   name: 'limit',
  //   type: 'number',
  //   required: false,
  //   description: 'The number of entries returned per query',
  //   example: 10,
  // })
  // @ApiQuery({
  //   name: 'page',
  //   type: 'number',
  //   required: false,
  //   description:
  //     'The position of the page number that you want the API to return',
  //   example: 1,
  // })
  public getUserById(
    @Param() getUsersParamDto: GetUsersParamDto,
    // @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    // @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.find(getUsersParamDto);
    // return this.usersService.findAll(getUsersParamDto, limit, page);
  }

  @Post()
  // @SetMetadata('authType', 'none')
  @ApiOperation({
    summary: 'Creates a new user',
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    example: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    },
  })
  @ApiBody({ type: CreateUserDto })
  @UseInterceptors(ClassSerializerInterceptor)
  @Auth(AuthType.None)
  public createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Post('create-many')
  @ApiOperation({
    summary: 'Creates multiple users',
  })
  @ApiResponse({
    status: 201,
    description: 'Users created successfully',
    example: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    },
  })
  public createManyUsers(@Body() createManyUsersDto: CreateManyUsersDto) {
    return this.usersService.createMany(createManyUsersDto);
  }

  @Patch()
  @ApiOperation({
    summary: 'Update a user',
  })
  @ApiResponse({
    status: 201,
    description: 'User updated successfully',
    example: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    },
  })
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}

import {
  Controller,
  Query,
  ValidationPipe,
  Get,
  ParseIntPipe,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { GetUsersFilterDto } from './dto/get-users-filter.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ReadUserDto } from './dto/read-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiConflictResponse,
} from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
@ApiConflictResponse()
export class UserController {
  constructor(private _userService: UserService) {}

  @Get()
  @ApiCreatedResponse({ description: 'Lista de usuarios.' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  getAllUsers(
    @Query(ValidationPipe) filterDto: GetUsersFilterDto,
  ): Promise<ReadUserDto[]> {
    return this._userService.getAllUsers(filterDto);
  }

  @Get('/:userId')
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  getUserById(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<ReadUserDto> {
    return this._userService.getUserById(userId);
  }

  @Post()
  crearteUser(@Body() createUserDto: CreateUserDto): Promise<ReadUserDto> {
    return this._userService.createUser(createUserDto);
  }

  @Patch(':userId')
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() user: UpdateUserDto,
  ) {
    return this._userService.updateUser(userId, user);
  }

  @Delete('/:userId')
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  deleteUser(@Param('userId', ParseIntPipe) userId: number): Promise<void> {
    return this._userService.deleteUser(userId);
  }
}

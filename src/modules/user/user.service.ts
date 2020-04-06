import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { GetUsersFilterDto } from './dto/get-users-filter.dto';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { plainToClass } from 'class-transformer';
import { ReadUserDto } from './dto/read-user.dto';
import { Status } from '../../shared/status.enum';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UserService {
  private logger = new Logger('UserService');
  constructor(
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
  ) {}

  getAllUsers(filterDto: GetUsersFilterDto): Promise<ReadUserDto[]> {
    return this._userRepository.getTasks(filterDto);
  }

  async getUserById(id: number): Promise<ReadUserDto> {
    const found = await this._userRepository.findOne({
      where: {
        id,
        status: Status.ACTIVE,
      },
    });

    if (!found) {
      throw new NotFoundException('User does not exists');
    }

    return plainToClass(ReadUserDto, found);
  }

  createUser(createUserDto: CreateUserDto): Promise<ReadUserDto> {
    return this._userRepository.createUser(createUserDto);
  }

  async updateUser(userId: number, user: UpdateUserDto): Promise<ReadUserDto> {
    const foundUser = await this._userRepository.findOne(userId, {
      where: { status: Status.ACTIVE },
    });

    if (!foundUser) {
      throw new NotFoundException('User does not exists');
    }

    foundUser.email = user.email;
    const updatedUser = await this._userRepository.save(foundUser);
    return plainToClass(ReadUserDto, updatedUser);
  }

  async deleteUser(userId: number): Promise<void> {
    const userExist = await this._userRepository.findOne(userId, {
      where: { status: Status.ACTIVE },
    });

    if (!userExist) {
      throw new NotFoundException();
    }

    await this._userRepository.update(userId, { status: Status.INACTIVE });
  }
}

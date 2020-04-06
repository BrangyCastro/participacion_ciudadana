import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { GetUsersFilterDto } from './dto/get-users-filter.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { plainToClass } from 'class-transformer';
import { ReadUserDto } from './dto/read-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getTasks(filterDto: GetUsersFilterDto): Promise<ReadUserDto[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('users');

    if (status) {
      query.andWhere('users.status = :status', { status });
    }
    // if (search) {
    //   query.andWhere(
    //     '(task.titulo LIKE :search OR task.descripcion LIKE :search)',
    //     { search: `%${search}%` },
    //   );
    // }

    const users = await query.getMany();
    return users.map((user: User) => plainToClass(ReadUserDto, user));
    // try {
    // } catch (error) {
    //   this.logger.error(
    //     `Fallo al obtener la tarea con el usuario ${
    //       user.username
    //     }. Filter: ${JSON.stringify(filterDto)}`,
    //     error.stack,
    //   );
    //   throw new InternalServerErrorException();
    // }
  }

  async createUser(createUserDto: CreateUserDto): Promise<ReadUserDto> {
    const { username, password, email } = createUserDto;

    const user = new User();
    user.username = username;
    user.password = password;
    user.email = email;

    try {
      await user.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return plainToClass(ReadUserDto, user);
  }
}

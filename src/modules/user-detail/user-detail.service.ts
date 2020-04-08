import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDetailRepository } from './user-deatil.repository';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { ReadUserDto } from '../user/dto/read-user.dto';
import { plainToClass } from 'class-transformer';
import { ReadUserDetailDto } from './dto/read-user-detail.dto';
import { Status } from '../../shared/status.enum';

@Injectable()
export class UserDetailService {
  constructor(private _userDetailRepository: UserDetailRepository) {}

  async updateUserDetail(
    userDetailId: number,
    updateUserDetailDto: UpdateUserDetailDto,
  ): Promise<ReadUserDetailDto> {
    const foundUserDetail = await this._userDetailRepository.findOne(
      userDetailId,
      {
        where: { status: Status.ACTIVE },
      },
    );

    if (!foundUserDetail) {
      throw new NotFoundException('User does not exists');
    }

    foundUserDetail.nombre = updateUserDetailDto.nombre;
    foundUserDetail.apellido = updateUserDetailDto.apellido;
    foundUserDetail.direccion = updateUserDetailDto.direccion;
    foundUserDetail.fech_nacimiento = updateUserDetailDto.fech_nacimiento;
    const updatedUser = await this._userDetailRepository.save(foundUserDetail);
    return plainToClass(ReadUserDetailDto, updatedUser);
  }

  // async deleteUserDetail(userDetailId: number): Promise<void> {
  //   const userExist = await this._userDetailRepository.findOne(userDetailId, {
  //     where: { status: Status.ACTIVE },
  //   });

  //   if (!userExist) {
  //     throw new NotFoundException();
  //   }

  //   await this._userDetailRepository.update(userDetailId, {
  //     status: Status.INACTIVE,
  //   });
  // }
}

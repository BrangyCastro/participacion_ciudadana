import { Controller, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UserDetailService } from './user-detail.service';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { ReadUserDetailDto } from './dto/read-user-detail.dto';
import {
  ApiTags,
  ApiForbiddenResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { Message } from '../../shared/message.enum';

@Controller('user-detail')
@ApiForbiddenResponse({ description: Message.FORBIDDEN })
@ApiBearerAuth()
@ApiTags('user-detail')
export class UserDetailController {
  constructor(private _userDetailServices: UserDetailService) {}

  @Patch('/:userDetaiId')
  @ApiResponse({
    status: 200,
    description: Message.CREATEDUSERDETAIL,
    type: UpdateUserDetailDto,
  })
  updateUserDetail(
    @Param('userDetaiId', ParseIntPipe) userDetaiId: number,
    @Body() updateUserDetailDto: UpdateUserDetailDto,
  ): Promise<ReadUserDetailDto> {
    return this._userDetailServices.updateUserDetail(
      userDetaiId,
      updateUserDetailDto,
    );
  }
}

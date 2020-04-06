import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { Status } from '../../../shared/status.enum';

export class GetUsersFilterDto {
  @ApiProperty({ required: false, enum: Status, enumName: 'Status' })
  @IsOptional()
  @IsIn([Status.ACTIVE, Status.INACTIVE])
  status: Status;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  search: string;
}

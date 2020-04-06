import { IsNumber, IsEmail, IsNotEmpty } from 'class-validator';
import { Type, Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class ReadUserDto {
  @Expose()
  @ApiProperty()
  @IsNumber()
  readonly id: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  readonly email: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  readonly username: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  readonly status: string;
}

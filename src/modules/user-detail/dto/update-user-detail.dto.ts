import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly apellido: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly direccion: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly fech_nacimiento: string;
}

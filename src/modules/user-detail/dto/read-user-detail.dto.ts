import { IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadUserDetailDto {
  @Expose()
  @IsString()
  readonly nombre: string;

  @Expose()
  @IsString()
  readonly apellido: string;

  @Expose()
  @IsString()
  readonly direccion: string;

  @Expose()
  @IsString()
  readonly fech_nacimiento: string;
}

import { Status } from '../../shared/status.enum';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_detail')
export class UserDetail extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  nombre: string;

  @Column({ type: 'varchar', nullable: true })
  apellido: string;

  @Column({ type: 'varchar', nullable: true })
  direccion: string;

  @Column({ type: 'date', nullable: true })
  fech_nacimiento: string;

  @Column({ type: 'double', nullable: true })
  latitud: number;

  @Column({ type: 'double', nullable: true })
  longitud: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt: Date;
}

import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
// import { UserDetails } from './user.details.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  // @OneToOne(type => UserDetails, {
  //   cascade: true,
  //   nullable: false,
  //   eager: true,
  // })
  // @JoinColumn({ name: 'detail_id' })
  // details: UserDetails;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}

// import {
//   BaseEntity,
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// @Entity('user_details')
// export class UserDetails extends BaseEntity {
//   @PrimaryGeneratedColumn('increment')
//   id: number;

//   @Column({ type: 'varchar', length: 50, nullable: true })
//   nombre: string;

//   @Column({ type: 'varchar', nullable: true })
//   apellido: string;

//   @Column({ type: 'varchar', nullable: true })
//   direccion: string;

//   @Column({ type: 'varchar', nullable: true })
//   fech_nacimiento: Date;

//   @Column({ type: 'decimal', nullable: true })
//   latitud: number;

//   @Column({ type: 'decimal', nullable: true })
//   longitud: number;

//   @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
//   status: string;

//   @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true })
//   createdAt: Date;

//   @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
//   updatedAt: Date;
// }

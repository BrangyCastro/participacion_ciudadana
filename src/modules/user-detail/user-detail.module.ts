import { Module } from '@nestjs/common';
import { UserDetailController } from './user-detail.controller';
import { UserDetailService } from './user-detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetailRepository } from './user-deatil.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserDetailRepository])],
  controllers: [UserDetailController],
  providers: [UserDetailService],
})
export class UserDetailModule {}

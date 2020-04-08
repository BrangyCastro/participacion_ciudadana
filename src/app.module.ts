import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { typeOrmConfig } from './config/typeorm.config';
import { UserDetailModule } from './modules/user-detail/user-detail.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, UserDetailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MapperService } from 'src/shared/mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserService, MapperService],
  controllers: [UserController],
})
export class UserModule {}

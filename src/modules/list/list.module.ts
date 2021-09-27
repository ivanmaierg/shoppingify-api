import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListRepository } from './list.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ListRepository])],
})
export class ListModule {}

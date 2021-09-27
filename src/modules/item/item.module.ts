import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './item.repository';
@Module({
  imports: [TypeOrmModule.forFeature([ItemRepository])],
})
export class ItemModule {}

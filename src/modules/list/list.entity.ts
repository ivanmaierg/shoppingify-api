import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from '../item/item.entity';

@Entity('lists')
export class List extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;
  @OneToMany((type) => Item, (item) => item.list)
  items: Item[];
  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;
  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}

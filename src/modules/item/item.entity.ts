import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { List } from '../list/list.entity';

@Entity('item')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'varchar' })
  description: string;
  @Column({ type: 'varchar', name: 'photo_url' })
  photoUrl: string;
  @Column({ type: 'decimal' })
  mount: number;
  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;
  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;
  @ManyToOne(() => List, (list) => list.items)
  list: List;
}

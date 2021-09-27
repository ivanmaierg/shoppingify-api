import { EntityRepository, Repository } from 'typeorm';
import { List } from './list.entity';

@EntityRepository(List)
export class ListRepository extends Repository<List> {}

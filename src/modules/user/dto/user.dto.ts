import { IsNotEmpty } from 'class-validator';
import { List } from 'src/modules/list/list.entity';

export class UserDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  email: string;

  list: List;
}

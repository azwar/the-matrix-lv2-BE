import { IsNumber } from 'class-validator';

class ItemValueDTO {
  @IsNumber()
  id: number;
}

export { ItemValueDTO };

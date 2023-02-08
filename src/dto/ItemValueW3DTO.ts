import { IsNotEmpty, IsNumber } from 'class-validator';

class ItemValueW3DTO {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  web3_creds: any;
}

export { ItemValueW3DTO };

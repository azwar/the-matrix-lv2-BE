import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ItemValueW3DTO } from '../dto/ItemValueW3DTO';
import { ItemValueDTO } from '../dto/ItemValueDTO';
import { MatrixService } from './matrix.service';

@Controller('matrix')
export class MatrixController {
  constructor(private readonly matrixService: MatrixService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/find-coordinate')
  @UsePipes(new ValidationPipe({ transform: true }))
  async findCoordinate(@Body() req: ItemValueDTO): Promise<any> {
    return await this.matrixService.findCoordinate(req.id);
  }

  @Post('/web3/find-coordinate')
  @UsePipes(new ValidationPipe({ transform: true }))
  async web3FindCoordinate(@Body() req: ItemValueW3DTO): Promise<any> {
    // validate web3 auth
    // find coordinate
    return await this.matrixService.findCoordinate(req.id);
  }
}

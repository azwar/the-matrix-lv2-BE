import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
}

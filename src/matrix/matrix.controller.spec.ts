import { Test, TestingModule } from '@nestjs/testing';
import { ItemValueDTO } from '../dto/ItemValueDTO';
import { MatrixController } from './matrix.controller';
import { MatrixModule } from './matrix.module';

describe('MatrixController', () => {
  let controller: MatrixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatrixController],
      imports: [MatrixModule],
    }).compile();

    controller = module.get<MatrixController>(MatrixController);
  });

  it('MatrixController - should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('MatrixController - get item coordinate should return false', async () => {
    const req = new ItemValueDTO();
    req.id = 200;
    const response = await controller.findCoordinate(req);
    expect(response).toEqual(false);
  });

  it('MatrixController - get item coordinate should return coordinate', async () => {
    const req = new ItemValueDTO();
    req.id = 1;
    const response = await controller.findCoordinate(req);
    expect(response).toHaveProperty('coordinate');
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { MatrixService } from './matrix.service';

describe('MatrixService', () => {
  let service: MatrixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatrixService],
    }).compile();

    service = module.get<MatrixService>(MatrixService);
  });

  it('MatrixService - should be defined', () => {
    expect(service).toBeDefined();
  });

  it('MatrixService - find coordinate must get positive result', async () => {
    const result = await service.findCoordinate(200);
    expect(result).toBeFalsy();
  });

  it('MatrixService - find coordinate must get Falsy result', async () => {
    const result = await service.findCoordinate(1);
    expect(result).toHaveProperty('coordinate');
  });
});

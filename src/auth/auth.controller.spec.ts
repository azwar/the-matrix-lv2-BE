import { Test, TestingModule } from '@nestjs/testing';
import { LoginDTO } from '../dto/LoginDTO';
import { AuthController } from './auth.controller';
import { AuthModule } from './auth.module';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return null', async () => {
    const req = new LoginDTO();
    req.username = 'user123';
    req.password = 'pwd123';

    try {
      await controller.login(req);
    } catch (error) {
      expect(error.message).toBe('Wrong username or password');
    }
  });

  it('should be return Access Token', async () => {
    const req = new LoginDTO();
    req.username = 'morpheus@gmail.com';
    req.password = 'morpheus123';

    const res = await controller.login(req);
    expect(res).toHaveProperty('access_token');
  });
});

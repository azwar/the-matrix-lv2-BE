import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('UsersService - should be defined', () => {
    expect(service).toBeDefined();
  });

  it('UsersService - shold return User object', async () => {
    const result = await service.getUser({ email: 'morpheus@gmail.com' });
    expect(result).toHaveProperty('first_name');
  });
});

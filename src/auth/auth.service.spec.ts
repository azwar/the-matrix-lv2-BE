import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule, AuthModule],
      providers: [AuthService, UsersService, JwtService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return Null', async () => {
    const res = await service.login({ username: 'user13', password: 'pwd123' });
    expect(res).toBe(null);
  });

  it('should be return Access Token', async () => {
    const res = await service.login({
      username: 'morpheus@gmail.com',
      password: 'morpheus123',
    });
    expect(res).toHaveProperty('access_token');
  });
});

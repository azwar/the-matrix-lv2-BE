import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('UsersService - should be defined', () => {
    expect(appController).toBeDefined();
  });

  describe('root', () => {
    it('should return "Welcome...!"', () => {
      expect(appController.index()).toBe('Welcome...!');
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  const mockAppService = {
    getHello: jest.fn(() => 'Hello World!'),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: mockAppService }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getHello', () => {
    it('should return "Hello World!"', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });

    it('should call AppService.getHello', async () => {
      mockAppService.getHello.mockClear();

      await appController.getHello();

      expect(mockAppService.getHello).toHaveBeenCalled();
    });
  });
});

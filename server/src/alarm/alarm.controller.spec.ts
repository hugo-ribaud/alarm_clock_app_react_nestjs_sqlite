import { Test, TestingModule } from '@nestjs/testing';
import { AlarmController } from './alarm.controller';
import { AlarmService } from './alarm.service';

describe('AlarmController', () => {
  let controller: AlarmController;
  let service: AlarmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlarmController],
      providers: [
        {
          provide: AlarmService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AlarmController>(AlarmController);
    service = module.get<AlarmService>(AlarmService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of alarms', async () => {
    const result = [];
    jest.spyOn(service, 'findAll').mockImplementation(async () => result);
    expect(await controller.findAll()).toBe(result);
  });
});

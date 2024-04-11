import { Test, TestingModule } from '@nestjs/testing';
import { AlarmService } from './alarm.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Alarm } from './alarm.entity';
import { Repository } from 'typeorm';

describe('AlarmService', () => {
  let service: AlarmService;
  let repository: Repository<Alarm>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlarmService,
        {
          provide: getRepositoryToken(Alarm),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AlarmService>(AlarmService);
    repository = module.get<Repository<Alarm>>(getRepositoryToken(Alarm));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of alarms', async () => {
    const testAlarms: Alarm[] = [];
    jest.spyOn(repository, 'find').mockResolvedValue(testAlarms);
    expect(await service.findAll()).toBe(testAlarms);
  });
});

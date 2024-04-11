import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alarm } from './alarm.entity';

@Injectable()
export class AlarmService {
  constructor(
    @InjectRepository(Alarm)
    private alarmRepository: Repository<Alarm>,
  ) {}

  findAll(): Promise<Alarm[]> {
    return this.alarmRepository.find();
  }

  findOne(id: number): Promise<Alarm> {
    return this.alarmRepository.findOne({ where: { id } });
  }

  create(alarm: Alarm): Promise<Alarm> {
    return this.alarmRepository.save(alarm);
  }

  async update(id: number, alarmData: Partial<Alarm>): Promise<Alarm> {
    const alarm = await this.alarmRepository.findOne({ where: { id } });
    if (!alarm) {
      // handle not found
    }
    Object.assign(alarm, alarmData);
    return this.alarmRepository.save(alarm);
  }

  async remove(id: number): Promise<void> {
    await this.alarmRepository.delete(id);
  }
}

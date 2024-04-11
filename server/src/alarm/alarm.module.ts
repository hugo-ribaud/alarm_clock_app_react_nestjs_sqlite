import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmService } from './alarm.service';
import { AlarmController } from './alarm.controller';
import { Alarm } from './alarm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alarm])],
  providers: [AlarmService],
  controllers: [AlarmController],
})
export class AlarmModule {}

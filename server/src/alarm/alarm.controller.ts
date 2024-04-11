import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AlarmService } from './alarm.service';
import { Alarm } from './alarm.entity';

@Controller('alarms')
export class AlarmController {
  constructor(private readonly alarmService: AlarmService) {}

  @Get()
  findAll(): Promise<Alarm[]> {
    return this.alarmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Alarm> {
    return this.alarmService.findOne(+id);
  }

  @Post()
  create(@Body() alarmData: Alarm): Promise<Alarm> {
    return this.alarmService.create(alarmData);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() alarmData: Partial<Alarm>,
  ): Promise<Alarm> {
    return this.alarmService.update(+id, alarmData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.alarmService.remove(+id);
    return { message: 'Alarm deleted successfully' };
  }
}

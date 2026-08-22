import { Controller, Get, Param } from '@nestjs/common';
import { KillStatisticsService } from './kill-statistics.service';

@Controller('kill-statistics')
export class KillStatisticsController {
  constructor(private readonly killStatisticsService: KillStatisticsService) {}

  @Get()
  findAll() {
    return this.killStatisticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.killStatisticsService.findOne(+id);
  }
}

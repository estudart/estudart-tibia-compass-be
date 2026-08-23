import { Controller, Get, Param, Query } from '@nestjs/common';
import { KillStatistic } from './entities/kill-statistic.entity';
import { KillStatisticsService } from './kill-statistics.service';

@Controller('kill-statistics')
export class KillStatisticsController {
  constructor(
    private readonly killStatisticsService: KillStatisticsService
  ) {}

  @Get()
  findAll(@Query('world') world?: string): Promise<KillStatistic[]> {
    return world
      ? this.killStatisticsService.findByWorld(world)
      : this.killStatisticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.killStatisticsService.findOne(+id);
  }
}

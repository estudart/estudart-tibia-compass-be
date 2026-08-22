import { Module } from '@nestjs/common';
import { KillStatisticsService } from './kill-statistics.service';
import { KillStatisticsController } from './kill-statistics.controller';

@Module({
  controllers: [KillStatisticsController],
  providers: [KillStatisticsService],
})
export class KillStatisticsModule {}

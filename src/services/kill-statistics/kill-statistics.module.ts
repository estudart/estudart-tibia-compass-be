import { Module } from '@nestjs/common';
import { KillStatisticsService } from './kill-statistics.service';
import { KillStatisticsController } from './kill-statistics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KillStatistic } from './entities/kill-statistic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KillStatistic])],
  controllers: [KillStatisticsController],
  providers: [KillStatisticsService],
})
export class KillStatisticsModule {}

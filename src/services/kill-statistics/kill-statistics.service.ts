import { Injectable } from '@nestjs/common';
import { CreateKillStatisticDto } from './dto/create-kill-statistic.dto';
import { UpdateKillStatisticDto } from './dto/update-kill-statistic.dto';

@Injectable()
export class KillStatisticsService {
  create(createKillStatisticDto: CreateKillStatisticDto) {
    return 'This action adds a new killStatistic';
  }

  findAll() {
    return `This action returns all killStatistics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} killStatistic`;
  }

  update(id: number, updateKillStatisticDto: UpdateKillStatisticDto) {
    return `This action updates a #${id} killStatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} killStatistic`;
  }
}

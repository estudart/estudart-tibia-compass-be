import { Injectable } from '@nestjs/common';

@Injectable()
export class KillStatisticsService {
  findAll() {
    return `This action returns all killStatistics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} killStatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} killStatistic`;
  }
}

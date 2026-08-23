import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KillStatistic } from './entities/kill-statistic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KillStatisticsService {
  constructor(
    @InjectRepository(KillStatistic)
    private readonly killStatisticRepository: Repository<KillStatistic>
  ) {}
  
  findAll(): Promise<KillStatistic[]> {
    return this.killStatisticRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} killStatistic`;
  }

  getByWorld(name: string): Promise<KillStatistic[]> {
    return this.killStatisticRepository.findBy({ world: name });
  }

  remove(id: number) {
    return `This action removes a #${id} killStatistic`;
  }
}

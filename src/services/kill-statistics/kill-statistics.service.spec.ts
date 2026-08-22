import { Test, TestingModule } from '@nestjs/testing';
import { KillStatisticsService } from './kill-statistics.service';

describe('KillStatisticsService', () => {
  let service: KillStatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KillStatisticsService],
    }).compile();

    service = module.get<KillStatisticsService>(KillStatisticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

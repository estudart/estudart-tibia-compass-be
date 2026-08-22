import { Test, TestingModule } from '@nestjs/testing';
import { KillStatisticsController } from './kill-statistics.controller';
import { KillStatisticsService } from './kill-statistics.service';

describe('KillStatisticsController', () => {
  let controller: KillStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KillStatisticsController],
      providers: [KillStatisticsService],
    }).compile();

    controller = module.get<KillStatisticsController>(KillStatisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

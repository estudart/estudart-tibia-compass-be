import { PartialType } from '@nestjs/mapped-types';
import { CreateKillStatisticDto } from './create-kill-statistic.dto';

export class UpdateKillStatisticDto extends PartialType(CreateKillStatisticDto) {}

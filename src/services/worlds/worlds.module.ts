import { Module } from '@nestjs/common';
import { WorldsService } from './worlds.service';
import { WorldsController } from './worlds.controller';
import { TibiaDataApiModule } from 'src/infrastructure/tibia-data-api/tibiaDataApi.module';

@Module({
  imports: [TibiaDataApiModule],
  controllers: [WorldsController],
  providers: [WorldsService],
})
export class WorldsModule {}

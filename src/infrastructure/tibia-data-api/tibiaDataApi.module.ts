import { Module } from '@nestjs/common';
import { TibiaDataApiAdapter } from 'src/infrastructure/tibia-data-api/tibiaDataApi.adapter';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [TibiaDataApiAdapter],
  exports: [TibiaDataApiAdapter]
})
export class TibiaDataApiModule {}
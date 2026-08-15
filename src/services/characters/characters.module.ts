import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { TibiaDataApiModule } from 'src/infrastructure/tibia-data-api/tibiaDataApi.module';

@Module({
  imports: [TibiaDataApiModule],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}

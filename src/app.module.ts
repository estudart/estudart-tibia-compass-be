import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './services/characters/characters.module';
import { WorldsModule } from './services/worlds/worlds.module';
import { TibiaDataApiModule } from './infrastructure/tibia-data-api/tibiaDataApi.module';

@Module({
  imports: [CharactersModule, WorldsModule, TibiaDataApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

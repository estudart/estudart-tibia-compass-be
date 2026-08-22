import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './services/characters/characters.module';
import { WorldsModule } from './services/worlds/worlds.module';
import { TibiaDataApiModule } from './infrastructure/tibia-data-api/tibiaDataApi.module';
import { KillStatisticsModule } from './services/kill-statistics/kill-statistics.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
    }),
    CharactersModule, 
    WorldsModule, 
    TibiaDataApiModule, KillStatisticsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

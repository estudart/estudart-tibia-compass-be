import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { TibiaDataApiAdapter } from 'src/infrastructure/tibia-data-api/tibiaDataApi.adapter';

@Injectable()
export class CharactersService {
  constructor(private readonly tibiaDataApiAdapter: TibiaDataApiAdapter) {}
  
  create(createCharacterDto: CreateCharacterDto) {
    return 'This action adds a new character';
  }

  findAll() {
    return `This action returns all characters`;
  }

  findOne(name: string) {
    return this.tibiaDataApiAdapter.getCharacter(name);
  }

  async getCharacterDeaths(name: string) {
    const deaths = await this.tibiaDataApiAdapter.getCharacterDeaths(name);

    const parsedDeaths = await Promise.all(
      deaths.map(async (death) => {
        const killerNames = death.killers.map((killer) => killer.name);
        return {
          time: death.time,
          killers: killerNames.length > 0 ? killerNames : ['Unknown'],
        };
      })
    );

    return parsedDeaths;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}

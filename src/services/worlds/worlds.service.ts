import { Injectable } from '@nestjs/common';
import { CreateWorldDto } from './dto/create-world.dto';
import { UpdateWorldDto } from './dto/update-world.dto';
import { TibiaDataApiAdapter } from 'src/infrastructure/tibia-data-api/tibiaDataApi.adapter';

@Injectable()
export class WorldsService {
  constructor(private readonly tibiaDataApiAdapter: TibiaDataApiAdapter) {}

  create(createWorldDto: CreateWorldDto) {
    return 'This action adds a new world';
  }

  findAll() {
    return `This action returns all worlds`;
  }

  findOne(name: string) {
    return this.tibiaDataApiAdapter.getWorld(name);
  }

  update(id: number, updateWorldDto: UpdateWorldDto) {
    return `This action updates a #${id} world`;
  }

  remove(id: number) {
    return `This action removes a #${id} world`;
  }
}

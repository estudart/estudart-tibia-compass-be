import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Creature } from './entities/creature.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class CreaturesService {
  constructor(
    @InjectRepository(Creature)
    private readonly creatureRepository: Repository<Creature>
  ) {}

  findAll() {
    return this.creatureRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} creature`;
  }
}

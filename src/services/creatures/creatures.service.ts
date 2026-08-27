import { Injectable } from '@nestjs/common';

@Injectable()
export class CreaturesService {
  findAll() {
    return `This action returns all creatures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creature`;
  }
}

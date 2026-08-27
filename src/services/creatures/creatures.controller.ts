import { Controller, Get, Param } from '@nestjs/common';
import { CreaturesService } from './creatures.service';


@Controller('creatures')
export class CreaturesController {
  constructor(private readonly creaturesService: CreaturesService) {}
  @Get()
  findAll() {
    return this.creaturesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creaturesService.findOne(+id);
  }
}

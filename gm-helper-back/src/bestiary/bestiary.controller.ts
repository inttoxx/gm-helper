import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BestiaryService } from './bestiary.service';
import { Bestiary } from './entities/bestiary.entity';

@Controller('bestiary')
export class BestiaryController {
  constructor(private readonly bestiaryService: BestiaryService) {}

  @Post()
  create(@Body() Bestiary: Bestiary) {
    return this.bestiaryService.create(Bestiary);
  }

  @Get()
  findAll() {
    return this.bestiaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bestiaryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Bestiary: Bestiary) {
    return this.bestiaryService.update(+id, Bestiary);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bestiaryService.remove(+id);
  }
}

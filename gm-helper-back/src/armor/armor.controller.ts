import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ArmorService } from './armor.service';
import { Armor } from './entities/armor.entity';

@Controller('armor')
export class ArmorController {
  constructor(private armorService: ArmorService) {}

  @Post()
  create(@Body() createArmorDto: Armor) {
    return this.armorService.create(createArmorDto);
  }

  @Get()
  findAll() {
    return this.armorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.armorService.findOne(+id);
  }

  @Put('id')
  update(@Param('id') id: string, @Body() armor: Armor) {
    return this.armorService.update(+id, armor);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.armorService.remove(+id);
  }
}

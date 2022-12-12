import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ArmorCatService } from './armor_cat.service';
import { ArmorCat } from './entities/armor_cat.entity';

@Controller('armor-cat')
export class ArmorCatController {
  constructor(private armorCatService: ArmorCatService) {}

  @Post()
  create(@Body() armorCatDto: ArmorCat) {
    return this.armorCatService.create(armorCatDto);
  }

  @Get()
  findAll() {
    return this.armorCatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.armorCatService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() armorCat: ArmorCat) {
    return this.armorCatService.update(+id, armorCat);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.armorCatService.remove(+id);
  }
}

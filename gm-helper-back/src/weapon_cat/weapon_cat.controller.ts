import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { WeaponCat } from './entities/weapon_cat.entity';
import { WeaponCatService } from './weapon_cat.service';

@Controller('weapon-cat')
export class WeaponCatController {
  constructor(private readonly weaponCatService: WeaponCatService) {}

  @Post()
  create(@Body() weaponCat: WeaponCat) {
    return this.weaponCatService.create(weaponCat);
  }

  @Get()
  findAll() {
    return this.weaponCatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weaponCatService.findOne(+id);
  }

  @Put()
  update(@Body() weaponCat: WeaponCat) {
    return this.weaponCatService.update(weaponCat);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weaponCatService.remove(+id);
  }
}

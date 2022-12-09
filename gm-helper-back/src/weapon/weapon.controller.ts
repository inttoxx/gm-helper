import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Weapon } from './entities/weapon.entity';
import { WeaponService } from './weapon.service';

@Controller('weapon')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService) {}

  @Post()
  create(@Body() weapon: Weapon) {
    return this.weaponService.create(weapon);
  }

  @Get()
  findAll() {
    return this.weaponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weaponService.findOne(+id);
  }

  @Put()
  update(@Body() weapon: Weapon) {
    return this.weaponService.update(weapon);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weaponService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FightPnjService } from './fight_pnj.service';
import { FightPnj } from './entities/fight_pnj.entity';

@Controller('fight-pnj')
export class FightPnjController {
  constructor(private readonly fightPnjService: FightPnjService) {}

  @Post()
  create(@Body() fightPnj: FightPnj) {
    return this.fightPnjService.create(fightPnj);
  }

  @Get()
  findAll() {
    return this.fightPnjService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fightPnjService.findOne(+id);
  }

  @Put('id')
  update(@Param('id') id: string, @Body() fightPnj: FightPnj) {
    return this.fightPnjService.update(+id, fightPnj);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fightPnjService.remove(+id);
  }
}

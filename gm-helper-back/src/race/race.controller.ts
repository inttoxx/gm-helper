import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Race } from './entities/race.entity';
import { RaceService } from './race.service';

@Controller('race')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  @Post()
  create(@Body() race: Race) {
    return this.raceService.create(race);
  }

  @Get()
  findAll() {
    return this.raceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.raceService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() race: Race) {
    return this.raceService.update(+id, race);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.raceService.remove(+id);
  }
}
function Ptu() {
  throw new Error('Function not implemented.');
}


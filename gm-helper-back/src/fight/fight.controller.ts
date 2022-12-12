import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { FightService } from './fight.service';
import { Fight } from './entities/fight.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('fight')
export class FightController {
  constructor(private readonly fightService: FightService) {}

  @Post()
  create(@Body() fight: Fight) {
    return this.fightService.create(fight);
  }

  @Get(':groupId')
  findAll(@Param('id') groupId: string) {
    return this.fightService.findAll(+groupId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Body() groupId: string) {
    return this.fightService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() fight: Fight) {
    return this.fightService.update(+id, fight);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fightService.remove(+id);
  }
}

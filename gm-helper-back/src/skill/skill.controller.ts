import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Skill } from './entities/skill.entity';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  create(@Body() skill: Skill) {
    return this.skillService.create(skill);
  }

  @Get()
  findAll() {
    return this.skillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() skill: Skill) {
    return this.skillService.update(+id, skill);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillService.remove(+id);
  }
}

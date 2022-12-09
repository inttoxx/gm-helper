import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Group } from './entities/group.entity';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body() Group: Group) {
    return this.groupService.create(Group);
  }

  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupService.findOne(+id);
  }

  @Put()
  update(@Body() updateGroupDto: Group) {
    return this.groupService.update(updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(+id);
  }
}

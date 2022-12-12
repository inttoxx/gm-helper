import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Way } from './entities/way.entity';
import { WayService } from './way.service';

@Controller('way')
export class WayController {
  constructor(private readonly wayService: WayService) {}

  @Post()
  create(@Body() way: Way) {
    return this.wayService.create(way);
  }

  @Get()
  findAll() {
    return this.wayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wayService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() way: Way) {
    return this.wayService.update(+id, way);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wayService.remove(+id);
  }
}

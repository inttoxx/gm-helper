import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Profile } from './entities/profile.entity';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() profile: Profile) {
    return this.profileService.create(profile);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() profile: Profile) {
    return this.profileService.update(+id, profile);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}

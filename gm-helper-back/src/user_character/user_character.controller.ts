import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Request} from '@nestjs/common';
import { UserCharacterService } from './user_character.service';
import { UserCharacter } from './entities/user_character.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user-character')
export class UserCharacterController {
  constructor(private readonly userCharacterService: UserCharacterService) {}

  @Post()
  create(@Body() UserCharacter: UserCharacter) {
    return this.userCharacterService.create(UserCharacter);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    return this.userCharacterService.findAll(req.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCharacterService.findOne(+id);
  }

  @Put('id')
  update(@Param('id') id: string, @Body() UserCharacter: UserCharacter) {
    return this.userCharacterService.update(+id, UserCharacter);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCharacterService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { UserCharacterService } from './user_character.service';
import { UserCharacterController } from './user_character.controller';
import { UserCharacter } from './entities/user_character.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserCharacter])],
  controllers: [UserCharacterController],
  providers: [UserCharacterService]
})
export class UserCharacterModule {}

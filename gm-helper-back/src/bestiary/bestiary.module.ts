import { Module } from '@nestjs/common';
import { BestiaryService } from './bestiary.service';
import { BestiaryController } from './bestiary.controller';
import { Bestiary } from './entities/bestiary.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bestiary])],
  controllers: [BestiaryController],
  providers: [BestiaryService]
})
export class BestiaryModule {}

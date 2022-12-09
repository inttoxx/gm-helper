import { Module } from '@nestjs/common';
import { ArmorCatService } from './armor_cat.service';
import { ArmorCatController } from './armor_cat.controller';
import { ArmorCat } from './entities/armor_cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArmorCat])],
  controllers: [ArmorCatController],
  providers: [ArmorCatService]
})
export class ArmorCatModule {}

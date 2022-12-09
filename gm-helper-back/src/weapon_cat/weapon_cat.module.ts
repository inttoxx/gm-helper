import { Module } from '@nestjs/common';
import { WeaponCatService } from './weapon_cat.service';
import { WeaponCatController } from './weapon_cat.controller';
import { WeaponCat } from './entities/weapon_cat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WeaponCat])],
  controllers: [WeaponCatController],
  providers: [WeaponCatService]
})
export class WeaponCatModule {}

import { Module } from '@nestjs/common';
import { ArmorService } from './armor.service';
import { ArmorController } from './armor.controller';
import { Armor } from './entities/armor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Armor])],
  controllers: [ArmorController],
  providers: [ArmorService]
})
export class ArmorModule {}

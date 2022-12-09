import { Module } from '@nestjs/common';
import { FightPnjService } from './fight_pnj.service';
import { FightPnjController } from './fight_pnj.controller';
import { FightPnj } from './entities/fight_pnj.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FightPnj])],
  controllers: [FightPnjController],
  providers: [FightPnjService]
})
export class FightPnjModule {}

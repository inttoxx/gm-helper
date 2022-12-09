import { Module } from '@nestjs/common';
import { WayService } from './way.service';
import { WayController } from './way.controller';
import { Way } from './entities/way.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Way])],
  controllers: [WayController],
  providers: [WayService]
})
export class WayModule {}

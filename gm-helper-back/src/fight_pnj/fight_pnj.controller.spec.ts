import { Test, TestingModule } from '@nestjs/testing';
import { FightPnjController } from './fight_pnj.controller';
import { FightPnjService } from './fight_pnj.service';

describe('FightPnjController', () => {
  let controller: FightPnjController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FightPnjController],
      providers: [FightPnjService],
    }).compile();

    controller = module.get<FightPnjController>(FightPnjController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FightPnjService } from './fight_pnj.service';

describe('FightPnjService', () => {
  let service: FightPnjService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FightPnjService],
    }).compile();

    service = module.get<FightPnjService>(FightPnjService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

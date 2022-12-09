import { Test, TestingModule } from '@nestjs/testing';
import { BestiaryService } from './bestiary.service';

describe('BestiaryService', () => {
  let service: BestiaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BestiaryService],
    }).compile();

    service = module.get<BestiaryService>(BestiaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

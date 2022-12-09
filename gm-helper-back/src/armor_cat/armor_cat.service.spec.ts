import { Test, TestingModule } from '@nestjs/testing';
import { ArmorCatService } from './armor_cat.service';

describe('ArmorCatService', () => {
  let service: ArmorCatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmorCatService],
    }).compile();

    service = module.get<ArmorCatService>(ArmorCatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

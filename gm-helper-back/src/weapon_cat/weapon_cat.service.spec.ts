import { Test, TestingModule } from '@nestjs/testing';
import { WeaponCatService } from './weapon_cat.service';

describe('WeaponCatService', () => {
  let service: WeaponCatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeaponCatService],
    }).compile();

    service = module.get<WeaponCatService>(WeaponCatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

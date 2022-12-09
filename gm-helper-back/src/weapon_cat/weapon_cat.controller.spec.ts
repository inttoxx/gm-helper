import { Test, TestingModule } from '@nestjs/testing';
import { WeaponCatController } from './weapon_cat.controller';
import { WeaponCatService } from './weapon_cat.service';

describe('WeaponCatController', () => {
  let controller: WeaponCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeaponCatController],
      providers: [WeaponCatService],
    }).compile();

    controller = module.get<WeaponCatController>(WeaponCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

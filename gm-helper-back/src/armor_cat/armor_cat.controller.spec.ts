import { Test, TestingModule } from '@nestjs/testing';
import { ArmorCatController } from './armor_cat.controller';
import { ArmorCatService } from './armor_cat.service';

describe('ArmorCatController', () => {
  let controller: ArmorCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArmorCatController],
      providers: [ArmorCatService],
    }).compile();

    controller = module.get<ArmorCatController>(ArmorCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BestiaryController } from './bestiary.controller';
import { BestiaryService } from './bestiary.service';

describe('BestiaryController', () => {
  let controller: BestiaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BestiaryController],
      providers: [BestiaryService],
    }).compile();

    controller = module.get<BestiaryController>(BestiaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

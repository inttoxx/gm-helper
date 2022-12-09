import { Test, TestingModule } from '@nestjs/testing';
import { UserCharacterController } from './user_character.controller';
import { UserCharacterService } from './user_character.service';

describe('UserCharacterController', () => {
  let controller: UserCharacterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCharacterController],
      providers: [UserCharacterService],
    }).compile();

    controller = module.get<UserCharacterController>(UserCharacterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

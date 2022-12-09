import { Test, TestingModule } from '@nestjs/testing';
import { UserCharacterService } from './user_character.service';

describe('UserCharacterService', () => {
  let service: UserCharacterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCharacterService],
    }).compile();

    service = module.get<UserCharacterService>(UserCharacterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

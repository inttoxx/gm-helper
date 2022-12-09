import { UserCharacter } from './user_character.entity';

describe('UserEntity', () => {
  it('should be defined', () => {
    expect(new UserCharacter()).toBeDefined();
  });
});
import { Weapon } from './weapon.entity';

describe('UserEntity', () => {
  it('should be defined', () => {
    expect(new Weapon()).toBeDefined();
  });
});
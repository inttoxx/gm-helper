import { Profile } from './profile.entity';

describe('UserEntity', () => {
  it('should be defined', () => {
    expect(new Profile()).toBeDefined();
  });
});
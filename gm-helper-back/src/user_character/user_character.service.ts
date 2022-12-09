import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCharacter } from './entities/user_character.entity';

@Injectable()
export class UserCharacterService {

  constructor(
    @InjectRepository(UserCharacter)
    private userCharRepository: Repository<UserCharacter>
  ){}

  async create(userchar: UserCharacter) {
    return await this.userCharRepository.insert(userchar)
  }

  async findAll(id: any): Promise<UserCharacter[]>{
    return await this.userCharRepository.find({
      relations: ['group', 'group.characters', 'group.characters.user'],
      where: [{'user': id}]
    })
  }

  async findOne(id: number) {
    return await this.userCharRepository.findOne({
      relations: [
        'group', 
        'profile', 
        'profile.ways', 
        'profile.ways.skills',
        'profile.authorized_armor_cat',
        'profile.authorized_weapon_cat',
        'race',
        'weapons',
        'armors'
      ],
      where: [{'id': id}]
    })
  }

  async update( userchar: UserCharacter) {
    return await this.userCharRepository.save(userchar)
  }

  async remove(id: number) {
    return await this.userCharRepository.delete(id)
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { use } from 'passport';
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
    return await this.userCharRepository.find()
  }

  async findOne(id: number): Promise<UserCharacter> {
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

  async update(id: number, userchar: UserCharacter) {
    const userCharToUpdate = await this.findOne(id)

    if (userchar.armors) {
      for (let i = 0; i < userchar.armors.length; i++) {
        let found = false

        for (let j = 0; j < userCharToUpdate.armors.length; j++){
          if (userchar.armors[i].name === userCharToUpdate.armors[j].name){
            found = true
              userCharToUpdate.armors.splice(j, 1)
          }
        }
        if (!found) {
          userCharToUpdate.armors.push(userchar.armors[i])
        }
      }
    }
    if (userchar.attack) {
      if (userchar.attack.magical) {
        userCharToUpdate.attack.magical = userchar.attack.magical
      }
      if (userchar.attack.melee) {
        userCharToUpdate.attack.melee = userchar.attack.melee
      }
      if (userchar.attack.ranged) {
        userCharToUpdate.attack.ranged = userchar.attack.ranged
      }
    }
    if (userchar.defense) {
      userCharToUpdate.defense = userchar.defense
    }
    if (userchar.description) {
      userCharToUpdate.description = userchar.description
    }
    if (userchar.fight) {
      userCharToUpdate.fight = userchar.fight
    }
    if (userchar.group) {
      userCharToUpdate.group = userchar.group
    }
    if (userchar.initiative) {
      userCharToUpdate.initiative = userchar.initiative
    }
    if (userchar.inventory) {
      for (let i = 0; i < userchar.inventory.length; i++) {
        let found = false

        for (let j = 0; j < userCharToUpdate.inventory.length; j++){
          if (userchar.inventory[i].name === userCharToUpdate.inventory[j].name){
            found = true
            if (userchar.inventory[i].quantity === 0){
              userCharToUpdate.inventory.splice(j, 1)
            } else {
              userCharToUpdate.inventory[j].quantity = userchar.inventory[i].quantity
            }
          }
        }
        if (!found) {
          userCharToUpdate.inventory.push(userchar.inventory[i])
        }
      }
    }
    if (userchar.level) {
      userCharToUpdate.level = userchar.level
    }
    if (userchar.modulos) {
      if (userchar.modulos.mod_charisma) {
        userCharToUpdate.modulos.mod_charisma = userchar.modulos.mod_charisma
      }
      if (userchar.modulos.mod_constitution) {
        userCharToUpdate.modulos.mod_constitution = userchar.modulos.mod_constitution
      }
      if (userchar.modulos.mod_dexterity) {
        userCharToUpdate.modulos.mod_dexterity = userchar.modulos.mod_dexterity
      }
      if (userchar.modulos.mod_intel) {
        userCharToUpdate.modulos.mod_intel = userchar.modulos.mod_intel
      }
      if (userchar.modulos.mod_strenght) {
        userCharToUpdate.modulos.mod_strenght = userchar.modulos.mod_strenght
      }
      if (userchar.modulos.mod_windsom) {
        userCharToUpdate.modulos.mod_windsom = userchar.modulos.mod_windsom
      }
    }
    if (userchar.money) {
      if (userchar.money.bronze) {
        userCharToUpdate.money.bronze = userchar.money.bronze
      }
      if (userchar.money.gold) {
        userCharToUpdate.money.gold = userchar.money.gold
      }
      if (userchar.money.silver) {
        userCharToUpdate.money.silver = userchar.money.silver
      }
    }
    if (userchar.profile) {
      userCharToUpdate.profile = userchar.profile
    }
    if (userchar.pv) {
      if (userchar.pv.max){
        userCharToUpdate.pv.max = userchar.pv.max
      }
      if (userchar.pv.remaining) {
        userCharToUpdate.pv.remaining = userchar.pv.remaining
      }
    }
    if (userchar.race) {
      userCharToUpdate.race = userchar.race
    }
    if (userchar.selected_skills) {
      let value = 0;
      for (let i = 0; i < userchar.selected_skills.length; i++) {
          let found = false
  
          for (let j = 0; j < userCharToUpdate.selected_skills.length; j++){
            if (userchar.selected_skills[i].name === userCharToUpdate.selected_skills[j].name){
              found = true
              userCharToUpdate.selected_skills.splice(j, 1)
            }
          }
          if (!found) {
            userCharToUpdate.selected_skills.push(userchar.selected_skills[i])
            value += userchar.selected_skills[i].value;
              if (value > 1) {
                  return {
                      error: 'to much skills selected'
                  };
              }
          }
      }
    }
    if (userchar.stats) {
      if (userchar.stats.charisma) {
        userCharToUpdate.stats.charisma = userchar.stats.charisma
      }
      if (userchar.stats.constitution) {
        userCharToUpdate.stats.constitution = userchar.stats.constitution
      }
      if (userchar.stats.dexterity) {
        userCharToUpdate.stats.dexterity = userchar.stats.dexterity
      }
      if (userchar.stats.intel) {
        userCharToUpdate.stats.intel = userchar.stats.intel
      }
      if (userchar.stats.strenght) {
        userCharToUpdate.stats.strenght = userchar.stats.strenght
      }
      if (userchar.stats.windsom) {
        userCharToUpdate.stats.windsom = userchar.stats.windsom
      }
    }
    if (userchar.weapons) {
      for (let i = 0; i < userchar.weapons.length; i++) {
          let found = false
  
          for (let j = 0; j < userCharToUpdate.weapons.length; j++){
            if (userchar.weapons[i].name === userCharToUpdate.weapons[j].name){
              found = true
                userCharToUpdate.weapons.splice(j, 1)
            }
          }
          if (!found) {
            userCharToUpdate.weapons.push(userchar.weapons[i])
          }
      }
    }
    if (userchar.name) {
      userCharToUpdate.name = userchar.name
    }

    return await this.userCharRepository.save(userCharToUpdate)
  }

  async remove(id: number) {
    return await this.userCharRepository.delete(id)
  }
}

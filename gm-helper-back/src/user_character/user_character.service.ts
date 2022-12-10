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
    return await this.userCharRepository.find({
      relations: ['group', 'group.characters', 'group.characters.user', 'selected_skills'],
      where: [{'user': id}]
    })
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
      userchar.armors.forEach((armor) => {
        userCharToUpdate.armors.forEach((armorToUpdate) => {
          if (armor === armorToUpdate) {
            let index = userCharToUpdate.armors.indexOf(armor)
            userCharToUpdate.armors.splice(index)
          } else {
            userCharToUpdate.armors.push(armor)
          }
        })
      })
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
      userchar.inventory.forEach((item) => {
        userCharToUpdate.inventory.forEach((intemToUpdate) => {
          if (item.name === intemToUpdate.name) {
            intemToUpdate.quantity = item.quantity
          } else {
            userCharToUpdate.inventory.push(item)
          }
          if (item.quantity == 0) {
            let index = userCharToUpdate.inventory.indexOf(item)
            userCharToUpdate.inventory.splice(index)
          }
        })
      })
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
      let value = 0
      userchar.selected_skills.forEach((skill) => {
        value += skill.value
        if (value > 1) {
          return {
            error : 'to much skills selected'
          }
        }
        userCharToUpdate.selected_skills.forEach((skillToUpdate) => {
          if (skillToUpdate === skill) {
            let index = userCharToUpdate.selected_skills.indexOf(skill)
            userCharToUpdate.selected_skills.splice(index)
          }
        })
      })
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
      userchar.weapons.forEach((weapon) => {
        userCharToUpdate.weapons.forEach((weaponToUpdate) => {
          if (weapon === weaponToUpdate) {
            let index = userCharToUpdate.weapons.indexOf(weapon)
            userCharToUpdate.weapons.splice(index)
          } else {
            userCharToUpdate.weapons.push(weapon)
          }
        })
      })
    }

    return await this.userCharRepository.save(userCharToUpdate)
  }

  async remove(id: number) {
    return await this.userCharRepository.delete(id)
  }
}

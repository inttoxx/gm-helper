import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>
  ) {}

  async create(profile: Profile) {
    return await this.profileRepository.insert(profile)
  }

  async findAll() {
    return await this.profileRepository.find({
      relations: ['ways', 'ways.skills']
    })
  }

  async findOne(id: number) {
    return await this.profileRepository.findOne({
      relations: [
        'ways',
        'ways.skills'
      ],
      where: [{'id': id}]
    })
  }

  async update(id: number, profile: Profile) {
    const profileToUpdate = await this.findOne(id)

    if (profile.attack_type) {
      profileToUpdate.attack_type = profile.attack_type
    }
    if (profile.authorized_armor_cat) {
      profile.authorized_armor_cat.forEach((armor) => {
        profileToUpdate.authorized_armor_cat.forEach((armorToUpdate => {
          if (armor === armorToUpdate){
            let index = profileToUpdate.authorized_armor_cat.indexOf(armor)
            profileToUpdate.authorized_armor_cat.splice(index)
          } else {
            profileToUpdate.authorized_armor_cat.push(armor)
          }
        }))
      })
    }
    if (profile.authorized_weapon_cat) {
      profile.authorized_weapon_cat.forEach((weapon) => {
        profileToUpdate.authorized_weapon_cat.forEach((weaponToUpdate => {
          if (weapon === weaponToUpdate){
            let index = profileToUpdate.authorized_weapon_cat.indexOf(weapon)
            profileToUpdate.authorized_weapon_cat.splice(index)
          } else {
            profileToUpdate.authorized_weapon_cat.push(weapon)
          }
        }))
      })
    }
    if (profile.name) {
      profileToUpdate.name = profile.name
    }
    if (profile.picture) {
      profileToUpdate.picture = profile.picture
    }
    if (profile.pv_dice) {
      profileToUpdate.pv_dice = profile.pv_dice
    }
    if (profile.starter_armors) {
      profile.starter_armors.forEach((armor) => {
        profileToUpdate.starter_armors.forEach((armorToUpdate => {
          if (armor === armorToUpdate){
            let index = profileToUpdate.starter_armors.indexOf(armor)
            profileToUpdate.starter_armors.splice(index)
          } else {
            profileToUpdate.starter_armors.push(armor)
          }
        }))
      })
    }
    if (profile.starter_weapons) {
      profile.starter_weapons.forEach((weapon) => {
        profileToUpdate.starter_weapons.forEach((weaponToUpdate => {
          if (weapon === weaponToUpdate){
            let index = profileToUpdate.starter_weapons.indexOf(weapon)
            profileToUpdate.starter_weapons.splice(index)
          } else {
            profileToUpdate.starter_weapons.push(weapon)
          }
        }))
      })
    }
    if (profile.ways) {
      profile.ways.forEach((way) => {
        profileToUpdate.ways.forEach((wayToUpdate => {
          if (way === wayToUpdate){
            let index = profileToUpdate.ways.indexOf(way)
            profileToUpdate.ways.splice(index)
          } else {
            profileToUpdate.ways.push(way)
          }
        }))
      })
    }

    return await this.profileRepository.save(profileToUpdate)
  }

  async remove(id: number) {
    return await this.profileRepository.delete(id)
  }
}

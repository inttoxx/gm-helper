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
      for (let i = 0; i < profile.authorized_armor_cat.length; i++) {
        let found = false

        for (let j = 0; j < profileToUpdate.authorized_armor_cat.length; j++){
          if (profile.authorized_armor_cat[i].name === profileToUpdate.authorized_armor_cat[j].name){
            found = true
            profileToUpdate.authorized_armor_cat.splice(j, 1)
          }
        }
        if (!found) {
          profileToUpdate.authorized_armor_cat.push(profile.authorized_armor_cat[i])
        }
      }
    }
    if (profile.authorized_weapon_cat) {
      for (let i = 0; i < profile.authorized_weapon_cat.length; i++) {
        let found = false

        for (let j = 0; j < profileToUpdate.authorized_weapon_cat.length; j++){
          if (profile.authorized_weapon_cat[i].name === profileToUpdate.authorized_weapon_cat[j].name){
            found = true
            profileToUpdate.authorized_weapon_cat.splice(j, 1)
          }
        }
        if (!found) {
          profileToUpdate.authorized_weapon_cat.push(profile.authorized_weapon_cat[i])
        }
      }
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
      for (let i = 0; i < profile.starter_armors.length; i++) {
        let found = false

        for (let j = 0; j < profileToUpdate.starter_armors.length; j++){
          if (profile.starter_armors[i].name === profileToUpdate.starter_armors[j].name){
            found = true
            profileToUpdate.starter_armors.splice(j, 1)
          }
        }
        if (!found) {
          profileToUpdate.starter_armors.push(profile.starter_armors[i])
        }
      }
    }
    if (profile.starter_weapons) {
      for (let i = 0; i < profile.starter_weapons.length; i++) {
        let found = false

        for (let j = 0; j < profileToUpdate.starter_weapons.length; j++){
          if (profile.starter_weapons[i].name === profileToUpdate.starter_weapons[j].name){
            found = true
            profileToUpdate.starter_weapons.splice(j, 1)
          }
        }
        if (!found) {
          profileToUpdate.starter_weapons.push(profile.starter_weapons[i])
        }
      }
    }
    if (profile.ways) {
      for (let i = 0; i < profile.ways.length; i++) {
        let found = false

        for (let j = 0; j < profileToUpdate.ways.length; j++){
          if (profile.ways[i].name === profileToUpdate.ways[j].name){
            found = true
            profileToUpdate.ways.splice(j, 1)
          }
        }
        if (!found) {
          profileToUpdate.ways.push(profile.ways[i])
        }
      }
    }

    return await this.profileRepository.save(profileToUpdate)
  }

  async remove(id: number) {
    return await this.profileRepository.delete(id)
  }
}

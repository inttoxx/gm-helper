import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weapon } from './entities/weapon.entity';

@Injectable()
export class WeaponService {

  constructor(
    @InjectRepository(Weapon)
    private weaponRepository: Repository<Weapon>
  ){}

  async create(createWeaponDto: Weapon) {
    return 'This action adds a new weapon';
  }

  async findAll(): Promise<Weapon[]> {
    return await this.weaponRepository.find({
      relations: {
        weapon_cat: true,
      }
    })
  }

  async findOne(id: number): Promise<Weapon> {
    return await this.weaponRepository.findOne({
      relations: {
        weapon_cat: true,
      },
      where: [{'id': id}]
    })
  }

  async update(id:number, weapon: Weapon) {
    const weaponToUpdate = await this.findOne(id)

    if (weapon.dm) {
      weaponToUpdate.dm = weapon.dm
    }
    if (weapon.magic_effect) {
      weaponToUpdate.magic_effect = weapon.magic_effect
    }
    if (weapon.name) {
      weaponToUpdate.name = weapon.name
    }
    if (weapon.weapon_cat) {
      weaponToUpdate.weapon_cat = weapon.weapon_cat
    }

    return await this.weaponRepository.save(weaponToUpdate)
  }

  async remove(id: number) {
    return await this.weaponRepository.delete(id)
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeaponCat } from './entities/weapon_cat.entity';

@Injectable()
export class WeaponCatService {

  constructor(
    @InjectRepository(WeaponCat)
    private weaponCatRepository: Repository<WeaponCat>
  ){}

  async create(weaponCat: WeaponCat) {
    return await this.weaponCatRepository.insert(weaponCat)
  }

  async findAll(): Promise<WeaponCat[]> {
    return await this.weaponCatRepository.find()
  }

  async findOne(id: number) {
    return await this.weaponCatRepository.findOne({
      relations: {
        weapons: true,
      },
      where: [{'id': id}]
    })
  }

  async update(weaponCat: WeaponCat) {
    return await this.weaponCatRepository.save(weaponCat)
  }

  async remove(id: number) {
    return await this.weaponCatRepository.delete(id)
  }
}

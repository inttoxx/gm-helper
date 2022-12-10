import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Armor } from './entities/armor.entity';

@Injectable()
export class ArmorService {

  constructor(
    @InjectRepository(Armor)
    private armorRepository: Repository<Armor>
  ){}

  async create(armor: Armor) {
    return await this.armorRepository.insert(armor)
  }

  async findAll(): Promise<Armor[]>{
    return await this.armorRepository.find({
      relations: {
        cat_armor: true,
      }
    })
  }

  async findOne(id: number): Promise<Armor> {
    return await this.armorRepository.findOne({
      relations: {
        cat_armor: true,
      },
      where: [{"id": id}]
    })
  }

  async update(id: number, updatedarmor: Armor) {
    const armor = await this.findOne(id)

    if (updatedarmor.cat_armor){
      armor.cat_armor = updatedarmor.cat_armor
    }
    if (updatedarmor.mod){
      armor.mod = updatedarmor.mod
    }
    if (updatedarmor.name){
      armor.name = updatedarmor.name
    }
    if (updatedarmor.magic_effect) {
      armor.magic_effect = updatedarmor.magic_effect
    }

    return await this.armorRepository.save(armor)
  }

  async remove(id: number) {
    return await this.armorRepository.delete(id)
  }
}

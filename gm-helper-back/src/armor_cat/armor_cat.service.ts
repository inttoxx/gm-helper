import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArmorCat } from './entities/armor_cat.entity';

@Injectable()
export class ArmorCatService {

  constructor(
    @InjectRepository(ArmorCat)
    private armorCatRepository: Repository<ArmorCat>
  ){ }

  async create(armorCat: ArmorCat) {
    return await this.armorCatRepository.insert(armorCat)
  }

  async findAll(): Promise<ArmorCat[]> {
    return await this.armorCatRepository.find()
  }

  async findOne(id: number): Promise<ArmorCat> {
    return await this.armorCatRepository.findOne({
      relations: {
        armors: true
      },
      where: [{"id": id}]
    })
  }

  async update(id: number, armorCat: ArmorCat) {
    const catArmor = await this.findOne(id)

    if (armorCat.name) {
      catArmor.name = armorCat.name
    }

    return await this.armorCatRepository.save(catArmor);
  }

  async remove(id: number) {
    return await this.armorCatRepository.delete(id);
  }
}

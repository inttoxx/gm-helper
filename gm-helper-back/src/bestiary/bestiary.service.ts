import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bestiary } from './entities/bestiary.entity';

@Injectable()
export class BestiaryService {

  constructor(
    @InjectRepository(Bestiary)
    private bestiaryRepository: Repository<Bestiary>
  ){}

  async create(bestiary: Bestiary) {
    return await this.bestiaryRepository.insert(bestiary)
  }

  async findAll(): Promise<Bestiary[]> {
    return await this.bestiaryRepository.find({
      relations: {
        race: true
      }
    })
  }

  async findOne(id: number): Promise<Bestiary> {
    return await this.bestiaryRepository.findOne({
      relations: {
        race: true,
      },
      where: [{'id': id}]
    })
  }

  async update(bestiary: Bestiary) {
    return await this.bestiaryRepository.save(bestiary);
  }

  async remove(id: number) {
    return await this.bestiaryRepository.delete(id)
  }
}

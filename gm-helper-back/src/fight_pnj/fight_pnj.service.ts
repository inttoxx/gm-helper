import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FightPnj } from './entities/fight_pnj.entity';

@Injectable()
export class FightPnjService {

  constructor(
    @InjectRepository(FightPnj)
    private fightPnjRepository: Repository<FightPnj>
  ){}

  async create(fightPnj: FightPnj) {
    return this.fightPnjRepository.insert(fightPnj)
  }

  async findAll(): Promise<FightPnj[]> {
    return await this.fightPnjRepository.find({
      relations: {
        race: true,
      },
    })
  }

  async findOne(id: number): Promise<FightPnj> {
    return await this.fightPnjRepository.findOne({
      relations: {
        race: true,
      },
      where: [{'id': id}]
    })
  }

  async update(fightPnj: FightPnj) {
    return await this.fightPnjRepository.save(fightPnj)
  }

  async remove(id: number) {
    return await this.fightPnjRepository.delete(id)
  }
}

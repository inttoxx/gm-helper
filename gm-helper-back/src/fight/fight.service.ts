import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fight } from './entities/fight.entity';

@Injectable()
export class FightService {

  constructor(
    @InjectRepository(Fight)
    private fightRepository: Repository<Fight>
  ){}

  async create(fight: Fight) {
    return await this.fightRepository.insert(fight)
  }

  async findAll(groupId: any): Promise<Fight[]> {
    return await this.fightRepository.find({
      where: [{'group': groupId}]
    })
  }
  async findOne(id: number): Promise<Fight> {
    return await this.fightRepository.findOne({
      relations: [
        'characters',
        'characters.profile', 
        'characters.profile.ways', 
        'characters.profile.ways.skills', 
        'ennemys', 
        'ennemys.race'
      ],
      where: [{'id': id}]
    })
  }

  async update(id: number, fight: Fight) {
    const fightToUpdate = await this.findOne(id)

    if (fight.spells_over_time){
      fight.spells_over_time.forEach((spell) => {
        fightToUpdate.spells_over_time.forEach((spellToUpdate) => {
          if (spell.name === spellToUpdate.name) {
            spellToUpdate = spell
          } else {
            fightToUpdate.spells_over_time.push(spell)
          }
        })
      })
    }
    if (fight.round) {
      fightToUpdate.round = fight.round
    }

    return await this.fightRepository.save(fightToUpdate)
  }

  async remove(id: number) {
    return await this.fightRepository.delete(id)
  }
}

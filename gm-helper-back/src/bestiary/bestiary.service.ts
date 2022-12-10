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

  async update(id: number, bestiary: Bestiary) {
    const pnj = await this.findOne(id)

    if (bestiary.attack) {
      if (bestiary.attack.magical){
        pnj.attack.magical = bestiary.attack.magical
      }
      if (bestiary.attack.melee){
        pnj.attack.melee = bestiary.attack.melee
      }
      if (bestiary.attack.ranged){
        pnj.attack.ranged = bestiary.attack.ranged
      }
    }
    if (bestiary.defense) {
      pnj.defense = bestiary.defense
    }
    if (bestiary.description) {
      pnj.description = bestiary.description
    }
    if (bestiary.initiative) {
      pnj.initiative = bestiary.initiative
    }
    if (bestiary.pv) {
      if (bestiary.pv.max) {
        pnj.pv.max = bestiary.pv.max
      }
      if (bestiary.pv.remaining) {
        pnj.pv.remaining = bestiary.pv.remaining
      }
    }
    if (bestiary.modulos) {
      if (bestiary.modulos.mod_charisma) {
        pnj.modulos.mod_charisma = bestiary.modulos.mod_charisma
      }
      if (bestiary.modulos.mod_constitution) {
        pnj.modulos.mod_constitution = bestiary.modulos.mod_constitution
      }
      if (bestiary.modulos.mod_dexterity) {
        pnj.modulos.mod_dexterity = bestiary.modulos.mod_dexterity
      }
      if (bestiary.modulos.mod_intel) {
        pnj.modulos.mod_intel = bestiary.modulos.mod_intel
      }
      if (bestiary.modulos.mod_strenght) {
        pnj.modulos.mod_strenght = bestiary.modulos.mod_strenght
      }
      if (bestiary.modulos.mod_windsom) {
        pnj.modulos.mod_windsom = bestiary.modulos.mod_windsom
      }
    }
    if (bestiary.name) {
      pnj.name = bestiary.name
    }
    if (bestiary.picture) {
      pnj.picture = bestiary.picture
    }
    if (bestiary.race) {
      pnj.race = bestiary.race
    }
    if (bestiary.skills) {
      bestiary.skills.forEach((skill) => {
        pnj.skills.forEach((pnjSkill) => {
          if (skill.name === pnjSkill.name) {
            pnjSkill = skill
          } else {
            pnj.skills.push(skill)
          }
        })        
      })
    }
    if (bestiary.stats) {
      if (bestiary.stats.charisma) {
        pnj.stats.charisma = bestiary.stats.charisma
      }
      if (bestiary.stats.constitution) {
        pnj.stats.constitution = bestiary.stats.constitution
      }
      if (bestiary.stats.dexterity) {
        pnj.stats.dexterity = bestiary.stats.dexterity
      }
      if (bestiary.stats.intel) {
        pnj.stats.intel = bestiary.stats.intel
      }
      if (bestiary.stats.strenght) {
        pnj.stats.strenght = bestiary.stats.strenght
      }
      if (bestiary.stats.windsom) {
        pnj.stats.windsom = bestiary.stats.windsom
      }
    }

    return await this.bestiaryRepository.save(pnj);
  }

  async remove(id: number) {
    return await this.bestiaryRepository.delete(id)
  }
}

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

  async update(id: number, fightPnj: FightPnj) {
    const pnjToUpdate = await this.findOne(id)

    if (fightPnj.attack) {
      if (fightPnj.attack.magical){
        pnjToUpdate.attack.magical = fightPnj.attack.magical
      }
      if (fightPnj.attack.melee){
        pnjToUpdate.attack.melee = fightPnj.attack.melee
      }
      if (fightPnj.attack.ranged){
        pnjToUpdate.attack.ranged = fightPnj.attack.ranged
      }
    }
    if (fightPnj.defense) {
      pnjToUpdate.defense = fightPnj.defense
    }
    if (fightPnj.description) {
      pnjToUpdate.description = fightPnj.description
    }
    if (fightPnj.initiative) {
      pnjToUpdate.initiative = fightPnj.initiative
    }
    if (fightPnj.modulos) {
      if (fightPnj.modulos.mod_charisma) {
        pnjToUpdate.modulos.mod_charisma = fightPnj.modulos.mod_charisma
      }
      if (fightPnj.modulos.mod_constitution) {
        pnjToUpdate.modulos.mod_constitution = fightPnj.modulos.mod_constitution
      }
      if (fightPnj.modulos.mod_dexterity) {
        pnjToUpdate.modulos.mod_dexterity = fightPnj.modulos.mod_dexterity
      }
      if (fightPnj.modulos.mod_intel) {
        pnjToUpdate.modulos.mod_intel = fightPnj.modulos.mod_intel
      }
      if (fightPnj.modulos.mod_strenght) {
        pnjToUpdate.modulos.mod_strenght = fightPnj.modulos.mod_strenght
      }
      if (fightPnj.modulos.mod_windsom) {
        pnjToUpdate.modulos.mod_windsom = fightPnj.modulos.mod_windsom
      }
    }
    if (fightPnj.name) {
      pnjToUpdate.name = fightPnj.name
    }
    if (fightPnj.picture) {
      pnjToUpdate.picture = fightPnj.picture
    }
    if (fightPnj.pv) {
      if (fightPnj.pv.max) {
        pnjToUpdate.pv.max = fightPnj.pv.max
      }
      if (fightPnj.pv.remaining) {
        pnjToUpdate.pv.remaining = fightPnj.pv.remaining
      }
    }
    if (fightPnj.race) {
      pnjToUpdate.race = fightPnj.race
    }
    if (fightPnj.skills) {
      for (let i = 0; i < fightPnj.skills.length; i++) {
        let found = false

        for (let j = 0; j < pnjToUpdate.skills.length; j++){
          if (fightPnj.skills[i].name === pnjToUpdate.skills[j].name){
            found = true
              pnjToUpdate.skills.splice(j, 1)
          }
        }
        if (!found) {
          pnjToUpdate.skills.push(fightPnj.skills[i])
        }
    }
    }
    if(fightPnj.stats) {
      if (fightPnj.stats.charisma) {
        pnjToUpdate.stats.charisma = fightPnj.stats.charisma
      }
      if (fightPnj.stats.constitution) {
        pnjToUpdate.stats.constitution = fightPnj.stats.constitution
      }
      if (fightPnj.stats.dexterity) {
        pnjToUpdate.stats.dexterity = fightPnj.stats.dexterity
      }
      if (fightPnj.stats.intel) {
        pnjToUpdate.stats.intel = fightPnj.stats.intel
      }
      if (fightPnj.stats.strenght) {
        pnjToUpdate.stats.strenght = fightPnj.stats.strenght
      }
      if (fightPnj.stats.windsom) {
        pnjToUpdate.stats.windsom = fightPnj.stats.windsom
      }
    }

    return await this.fightPnjRepository.save(pnjToUpdate)
  }

  async remove(id: number) {
    return await this.fightPnjRepository.delete(id)
  }
}

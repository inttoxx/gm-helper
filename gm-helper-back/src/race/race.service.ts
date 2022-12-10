import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Race } from './entities/race.entity';

@Injectable()
export class RaceService {

  constructor(
    @InjectRepository(Race)
    private raceRepository: Repository<Race>
  ){}

  async create(race: Race) {
    return await this.raceRepository.insert(race)
  }

  async findAll(): Promise<Race[]> {
    return await this.raceRepository.find()
  }

  async findOne(id: number): Promise<Race> {
    return await this.raceRepository.findOne({
      where: [{'id': id}]
    })
  }

  async update(id: number, race: Race) {
    const raceToUpdate = await this.findOne(id)

    if (race.name) {
      raceToUpdate.name = race.name
    }
    if (race.stats_modifications){
      if (race.stats_modifications.buff) {
        raceToUpdate.stats_modifications.buff = race.stats_modifications.buff
      }
      if (race.stats_modifications.debuff) {
        raceToUpdate.stats_modifications.debuff = race.stats_modifications.debuff
      }
    }

    return await this.raceRepository.save(raceToUpdate)
  }

  async remove(id: number) {
    return await this.raceRepository.delete(id)
  }
}

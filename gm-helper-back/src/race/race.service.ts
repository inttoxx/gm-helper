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

  async update(race: Race) {
    return await this.raceRepository.save(race)
  }

  async remove(id: number) {
    return await this.raceRepository.delete(id)
  }
}

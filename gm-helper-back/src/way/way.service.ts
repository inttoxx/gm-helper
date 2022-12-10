import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Way } from './entities/way.entity';

@Injectable()
export class WayService {

  constructor(
    @InjectRepository(Way)
    private wayRepository: Repository<Way>
  ){}

  async create(way: Way) {
    return await this.wayRepository.insert(way)
  }

  async findAll(): Promise<Way[]> {
    return await this.wayRepository.find({
      relations: {
        skills: true
      }
    })
  }

  async findOne(id: number): Promise<Way> {
    return await this.wayRepository.findOne({
      relations: {
        skills: true
      },
      where: [{'id': id}]
    })
  }

  async update(id: number, way: Way) {
    const wayToUpdate = await this.findOne(id)

    if (way.name) {
      wayToUpdate.name = way.name
    }
    if (way.profile) {
      wayToUpdate.profile = way.profile
    }

    return await this.wayRepository.save(wayToUpdate)
  }

  async remove(id: number) {
    return await this.wayRepository.delete(id)
  }
}

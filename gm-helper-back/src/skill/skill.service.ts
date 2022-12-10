import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {

  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>
  ){}

  async create(skill: Skill) {
    return await this.skillRepository.insert(skill)
  }

  async findAll(): Promise<Skill[]> {
    return await this.skillRepository.find({
      relations: {
        way: true,
      }
    })
  }

  async findOne(id: number): Promise<Skill> {
    return await this.skillRepository.findOne({
      relations: {
        way: true,
      },
      where: [{'id': id}]
    })
  }

  async update(id: number, skill: Skill) {
    const skillToUpdate = await this.findOne(id)

    if (skill.description) {
      skillToUpdate.description = skill.description
    }
    if (skill.name) {
      skillToUpdate.name = skill.name
    }
    if (skill.value) {
      skillToUpdate.value = skill.value
    }
    if (skill.way) {
      skillToUpdate.way = skill.way
    }

    return await this.skillRepository.save(skillToUpdate)
  }

  async remove(id: number) {
    return await this.skillRepository.delete(id)
  }
}

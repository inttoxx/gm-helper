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

  async update(skill: Skill) {
    return await this.skillRepository.save(skill)
  }

  async remove(id: number) {
    return await this.skillRepository.delete(id)
  }
}

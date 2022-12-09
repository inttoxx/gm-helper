import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>
  ) {}

  async create(profile: Profile) {
    return await this.profileRepository.insert(profile)
  }

  async findAll() {
    return await this.profileRepository.find({
      relations: ['ways', 'ways.skills']
    })
  }

  async findOne(id: number) {
    return await this.profileRepository.findOne({
      relations: [
        'ways',
        'ways.skills'
      ],
      where: [{'id': id}]
    })
  }

  async update(profile: Profile) {
    return await this.profileRepository.save(profile)
  }

  async remove(id: number) {
    return await this.profileRepository.delete(id)
  }
}

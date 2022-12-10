import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {

  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>
  ){}

  async create(group: Group) {
    return await this.groupRepository.insert(group)
  }

  async findAll(): Promise<Group[]> {
    return await this.groupRepository.find({
      relations: {
        characters: true,
        user: true,
      },
    });
  }

  async findOne(id: number): Promise<Group> {
    return this.groupRepository.findOne({
      relations: [
        "characters",
        "user"
      ],
      where: [{'id': id}]
    })
  }

  async update(id: number, group: Group) {
    const grp = await this.findOne(id)

    if (group.name) {
      grp.name = group.name
    }
    if (group.note) {
      grp.note = group.note
    }
    if (group.picture) {
      grp.picture = group.picture
    }

    return await this.groupRepository.save(group)
  }

  async remove(id: number) {
    return await this.groupRepository.delete(id)
  }
}

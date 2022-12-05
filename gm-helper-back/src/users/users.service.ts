import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
     ) { }

    async getAllUsers(): Promise<User[]> {
        const user = await this.usersRepository.find({
            select: ['id','username', 'email']
        });
        return user
    }

    async getUserById(id: number): Promise<User> {
        const user = await this.usersRepository.findOneBy({id});
        return user
    }

    async GetUserByUsername(username: string): Promise<User> {
        const user =  await this.usersRepository.findOneBy({username});
        return user
    }
    async GetUserByEmail(email: string): Promise<User> {
        const user =  await this.usersRepository.findOneBy({email});
        return user
    }

    async createUser(user: User) {
        const usernameAllreadyTaked = await this.GetUserByUsername(user.username)
        const emailAllreadyTaked = await this.GetUserByEmail(user.email)
        if (usernameAllreadyTaked || emailAllreadyTaked){
            return {
                'error': 'username or email allready used'
            }
        }
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt)

        this.usersRepository.insert(user)

        return {'message': `user ${user.username} successfully created`}
    }

    async updateUser(user: User) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}

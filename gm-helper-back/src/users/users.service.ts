import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { User } from './user.entity/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
     ){}

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
 
         return await this.usersRepository.insert(user)
    }

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.find({
            select: ['id', 'username', 'email', "avatar_img"]
        });
    }

    async getUserById(id: number): Promise<User> {
        return await this.usersRepository.findOne({
            select: ["id", "username", "avatar_img"],
            where: [{ "id": id }]
        });
    }

    async profile(id: number): Promise<User> {
        return await this.usersRepository.findOne({
            relations: ['groups', 'characters', 'characters.group'],
            where: [{'id': id}]
        })
    }

    async GetUserByUsername(username: string): Promise<User> {
        return await this.usersRepository.findOneBy({username});
    }

    async GetUserByEmail(email: string): Promise<User> {
        return await this.usersRepository.findOneBy({email});
    }

    async SearchUserByUsername(username: string): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["id", "username", "avatar_img"],
            where: {
                "username": Like(`%${username}%`)
            }
        })
    }

    async updateUser(id: number, user: User) {
        const userToUpdate = await this.usersRepository.findOneBy({'id': id})

        if (user.admin){
            userToUpdate.admin = user.admin
        }
        if (user.avatar_img) {
            userToUpdate.avatar_img = user.avatar_img
        }
        if (user.email) {
            const emailAllreadyTaked = await this.GetUserByEmail(user.email)
            if (emailAllreadyTaked) {
                return {
                    error: "email allready used"
                }
            }
            userToUpdate.email = user.email
        }
        if (user.password) {
            userToUpdate.salt = await bcrypt.genSalt();
            userToUpdate.password = await bcrypt.hash(user.password, userToUpdate.salt)
        }
        if (user.username) {
            const usernameAllreadyTaked = await this.GetUserByUsername(user.username)
            if (usernameAllreadyTaked){
                return {
                    error: "username allready used"
                }
            }
            userToUpdate.username = user.username
        }

        return await this.usersRepository.save(userToUpdate)
    }

    async deleteUser(id: number) {
        return await this.usersRepository.delete(id);
    }
}

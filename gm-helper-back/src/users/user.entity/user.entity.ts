import {
    IsEmail,
    IsOptional,
    IsString,
  } from 'class-validator';
import { Group } from 'src/group/entities/group.entity';
import { UserCharacter } from 'src/user_character/entities/user_character.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 25, unique: true})
    @IsString()
    username: string;

    @Column({unique: true})
    @IsEmail()
    email: string;

    @Column()
    @IsString()
    password: string;
    
    @Column()
    salt: string;

    @Column()
    avatar_img:string;

    @OneToMany(() => UserCharacter, (userCharacter) => userCharacter.user)
    characters: UserCharacter[];

    @OneToMany(() => Group, (group) => group.user)
    groups: Group[]
}

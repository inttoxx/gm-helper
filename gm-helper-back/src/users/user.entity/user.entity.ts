import {
    IsEmail,
    IsString,
  } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

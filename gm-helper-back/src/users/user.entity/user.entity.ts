import { Group } from 'src/group/entities/group.entity';
import { UserCharacter } from 'src/user_character/entities/user_character.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 25, unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;
    
    @Column()
    salt: string;

    @Column()
    avatar_img:string;

    @Column({default: 0})
    admin: number;

    @OneToMany(() => UserCharacter, (userCharacter) => userCharacter.user)
    characters: UserCharacter[];

    @OneToMany(() => Group, (group) => group.user)
    groups: Group[]
}

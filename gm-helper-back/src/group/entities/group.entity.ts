import { Fight } from "src/fight/entities/fight.entity";
import { User } from "src/users/user.entity/user.entity";
import { UserCharacter } from "src/user_character/entities/user_character.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    picture: string;
    
    @Column()
    note: string;

    @OneToMany(() => UserCharacter, (userCharacter) => userCharacter.group)
    characters: UserCharacter[];

    @OneToMany(() => Fight, (fight) => fight.group)
    fights: Fight;

    @ManyToOne(() => User, (user) => user.groups)
    user: User;
}

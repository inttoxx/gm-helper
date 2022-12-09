import { Bestiary } from "src/bestiary/entities/bestiary.entity";
import { FightPnj } from "src/fight_pnj/entities/fight_pnj.entity";
import { UserCharacter } from "src/user_character/entities/user_character.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Race {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("simple-json")
    stats_modifications: {
        buff: string,
        debuff: string,
    }

    @OneToMany(() => UserCharacter, (userChar) => userChar.profile)
    characters: UserCharacter[];

    @OneToMany(() => Bestiary, (pnj) => pnj.race)
    pnjs: Bestiary[];

    @OneToMany(() => FightPnj, (fightPnj) => fightPnj.race)
    fight_pnjs: FightPnj[];
}

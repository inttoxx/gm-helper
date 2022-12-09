import { Bestiary } from "src/bestiary/entities/bestiary.entity";
import { FightPnj } from "src/fight_pnj/entities/fight_pnj.entity";
import { Group } from "src/group/entities/group.entity";
import { UserCharacter } from "src/user_character/entities/user_character.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Fight {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    round: number;

    @Column("json")
    spells_over_time: {
        name: string,
        round_remaining: number,
        description: string,
    }[];

    @ManyToOne(() => Group, (group) => group.fights)
    group: Group;

    @OneToMany(() => FightPnj, (pnj) => pnj.fight)
    ennemys: Bestiary[];

    @OneToMany(() => UserCharacter, (userChar) => userChar.fight)
    characters: UserCharacter[];
}

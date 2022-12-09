import { Fight } from "src/fight/entities/fight.entity";
import { Race } from "src/race/entities/race.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FightPnj {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Fight, (fight) => fight.ennemys)
    fight: Fight;

    @Column()
    name: string;

    @Column("simple-json")
    pv: {
        max: number,
        remaining: number;
    };

    @Column("simple-json")
    stats: {
        strenght: number,
        dexterity: number,
        constitution: number,
        intel: number,
        windsom: number,
        charisma: number,
    };

    @Column("simple-json")
    modulos: {
        mod_strenght: number,
        mod_dexterity: number,
        mod_constitution: number,
        mod_intel: number,
        mod_windsom: number,
        mod_charisma: number,
    };

    @Column()
    initiative: number;

    @Column("simple-json")
    attack: {
        melee: number,
        ranged: number,
        magical: number,
    }

    @Column()
    defense: number;

    @Column()
    description: string;

    @Column()
    picture: string;

    @Column("json")
    skills: {
        name: string,
        description: string,
    }[]

    @ManyToOne(() => Race, (race) => race.pnjs)
    race: Race;
}

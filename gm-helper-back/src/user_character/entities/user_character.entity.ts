import { Armor } from "src/armor/entities/armor.entity";
import { Fight } from "src/fight/entities/fight.entity";
import { Group } from "src/group/entities/group.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { Race } from "src/race/entities/race.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { User } from "src/users/user.entity/user.entity";
import { Weapon } from "src/weapon/entities/weapon.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserCharacter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    level: number;

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
    };

    @Column()
    defense: number;

    @Column("json")
    inventory: {
        name: string,
        quantity: number,
    }[];

    @Column("simple-json")
    money: {
        gold: number,
        silver: number,
        bronze: number,
    };

    @Column()
    description: string;
    
    @ManyToOne(() => Profile, (profile) => profile.characters)
    profile: Profile;

    @ManyToOne(() => Race, (race) => race.characters)
    race: Race;

    @ManyToOne(() => User, (user) => user.characters)
    user: User;

    @ManyToOne(() => Group, (group) => group.characters)
    group: Group;

    @ManyToOne(() => Fight, (fight) => fight.characters)
    fight: Fight;

    @ManyToMany(() => Weapon)
    @JoinTable()
    weapons: Weapon[];

    @ManyToMany(() => Armor)
    @JoinTable()
    armors: Armor[];

    @ManyToMany(() => Skill)
    @JoinTable()
    selected_skills: Skill[];
}

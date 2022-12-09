import { Armor } from "src/armor/entities/armor.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { UserCharacter } from "src/user_character/entities/user_character.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ArmorCat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => Armor, (armor) => armor.cat_armor)
    armors: Armor[];
}

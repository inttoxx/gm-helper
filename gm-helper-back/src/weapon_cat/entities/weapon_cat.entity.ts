import { Profile } from "src/profile/entities/profile.entity";
import { UserCharacter } from "src/user_character/entities/user_character.entity";
import { Weapon } from "src/weapon/entities/weapon.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WeaponCat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Weapon, (weapon) => weapon.weapon_cat)
    weapons: Weapon[];
}

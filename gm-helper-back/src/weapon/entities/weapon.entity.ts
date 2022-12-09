import { Profile } from "src/profile/entities/profile.entity";
import { UserCharacter } from "src/user_character/entities/user_character.entity";
import { WeaponCat } from "src/weapon_cat/entities/weapon_cat.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Weapon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dm: string;

    @ManyToOne(() => WeaponCat, (weaponCat) => weaponCat.weapons)
    weapon_cat: WeaponCat;
}

import { Armor } from "src/armor/entities/armor.entity";
import { ArmorCat } from "src/armor_cat/entities/armor_cat.entity";
import { UserCharacter } from "src/user_character/entities/user_character.entity";
import { Way } from "src/way/entities/way.entity";
import { Weapon } from "src/weapon/entities/weapon.entity";
import { WeaponCat } from "src/weapon_cat/entities/weapon_cat.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    pv_dice: string;

    @Column()
    attack_type: string;

    @Column()
    picture: string;

    @OneToMany(() => Way,(way) => way.profile)
    ways: Way[]

    @OneToMany(() => UserCharacter, (userChar) => userChar.profile)
    characters: UserCharacter[]

    @ManyToMany(() => WeaponCat)
    @JoinTable()
    authorized_weapon_cat: WeaponCat[];

    @ManyToMany(() => ArmorCat)
    @JoinTable()
    authorized_armor_cat: ArmorCat[];

    @ManyToMany(() => Weapon)
    @JoinTable()
    starter_weapons: Weapon[];

    @ManyToMany(() => Armor)
    @JoinTable()
    starter_armors: Armor[];
}

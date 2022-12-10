import { IsOptional } from "class-validator";
import { ArmorCat } from "src/armor_cat/entities/armor_cat.entity";
import { Profile } from "src/profile/entities/profile.entity";
import { UserCharacter } from "src/user_character/entities/user_character.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Armor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    mod: number;

    @Column()
    @IsOptional()
    magic_effect: string;

    @ManyToOne(() => ArmorCat, (armorCat) => armorCat.armors)
    cat_armor: ArmorCat
}

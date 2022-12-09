import { Profile } from "src/profile/entities/profile.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Way {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Skill, (skill) => skill.way)
    skills: Skill[];

    @ManyToOne(() => Profile, (profile) => profile.ways)
    profile: Profile;
}

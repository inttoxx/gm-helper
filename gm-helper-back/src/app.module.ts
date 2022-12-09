import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity/user.entity';
import { GroupModule } from './group/group.module';
import { RaceModule } from './race/race.module';
import { ArmorModule } from './armor/armor.module';
import { WeaponModule } from './weapon/weapon.module';
import { ProfileModule } from './profile/profile.module';
import { WeaponCatModule } from './weapon_cat/weapon_cat.module';
import { ArmorCatModule } from './armor_cat/armor_cat.module';
import { FightModule } from './fight/fight.module';
import { UserCharacterModule } from './user_character/user_character.module';
import { BestiaryModule } from './bestiary/bestiary.module';
import { WayModule } from './way/way.module';
import { SkillModule } from './skill/skill.module';
import { FightPnjModule } from './fight_pnj/fight_pnj.module';
import { Armor } from './armor/entities/armor.entity';
import { ArmorCat } from './armor_cat/entities/armor_cat.entity';
import { Bestiary } from './bestiary/entities/bestiary.entity';
import { Fight } from './fight/entities/fight.entity';
import { FightPnj } from './fight_pnj/entities/fight_pnj.entity';
import { Group } from './group/entities/group.entity';
import { Profile } from './profile/entities/profile.entity';
import { Race } from './race/entities/race.entity';
import { Skill } from './skill/entities/skill.entity';
import { UserCharacter } from './user_character/entities/user_character.entity';
import { Way } from './way/entities/way.entity';
import { Weapon } from './weapon/entities/weapon.entity';
import { WeaponCat } from './weapon_cat/entities/weapon_cat.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      {
        "type": "mysql",
        "host": process.env.MYSQL_HOST,
        "port": 3306,
        "username": process.env.MYSQL_USERNAME,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DB_NAME,
        "entities": [
          Armor,
          ArmorCat,
          Bestiary,
          Fight,
          FightPnj,
          Group,
          Profile,
          Race,
          Skill,
          UserCharacter,
          User,          
          Way,
          Weapon,
          WeaponCat,
        ],
        "synchronize": true,
      }
    ),
    UsersModule,
    AuthModule,
    GroupModule,
    RaceModule,
    ArmorModule,
    WeaponModule,
    ProfileModule,
    WeaponCatModule,
    ArmorCatModule,
    FightModule,
    UserCharacterModule,
    BestiaryModule,
    WayModule,
    SkillModule,
    FightPnjModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

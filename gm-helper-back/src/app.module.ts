import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity/user.entity';

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
          User
        ],
        "synchronize": true,
      }
    ),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

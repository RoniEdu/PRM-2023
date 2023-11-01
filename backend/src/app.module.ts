import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './controllers/profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from "./controllers/UserController";
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { Topic } from './entities/topic.entity';
import { TopicController } from './controllers/TopicController';
import { TopicService } from './services/topic.service';
import { AuthController } from './services/auth.controller';
import { AuthService } from './services/auth.service';
import {JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'materdei',
      signOptions: {expiresIn: '24h'}
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'prm_2023',
      synchronize: true,
      entities: [User, Topic]
    }),
    TypeOrmModule.forFeature([User, Topic])
  ],
  controllers: [AppController, ProfileController, UserController, TopicController, AuthController],
  providers: [AppService, UserService, TopicService, AuthService],
})
export class AppModule {}

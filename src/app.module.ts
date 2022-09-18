import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    // Register with root then it will available for all module without re-import
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_URL,
      port: +process.env.DB_PORT,
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [User], // Register the entities
      synchronize: false,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService, JwtService],
})
export class AppModule {}

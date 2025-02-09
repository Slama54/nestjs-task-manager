/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './strategies/local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt.config';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import refreshJwtConfig from './config/refresh-jwt.config';
import { RefreshJwtStrategy } from './strategies/refresh.strategy';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
  JwtModule.registerAsync(jwtConfig.asProvider()),
  ConfigModule.forFeature(jwtConfig),
  ConfigModule.forFeature(refreshJwtConfig),
],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy, RefreshJwtStrategy],
})
export class AuthModule {}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';

@Module({
  imports: [ConfigModule
    .forRoot({
    isGlobal: true,
    load:[dbConfig]
  }),
    TaskModule, TypeOrmModule.forRootAsync({
      useFactory:dbConfig
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

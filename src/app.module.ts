/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PdfModule } from './pdf/pdf.module';


import dbConfig from './config/db.config';

@Module({
  imports: [ConfigModule
    .forRoot({
    isGlobal: true,
    load:[dbConfig]
  }),
    TaskModule, TypeOrmModule.forRootAsync({
      useFactory:dbConfig
    }), UserModule, AuthModule, PdfModule  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

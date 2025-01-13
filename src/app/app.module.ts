import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from 'src/core/database';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ApiManagerModule } from 'src/modules/api-manager/api-manager.module';
import { CheckUrlModule } from 'src/modules/check-url/check-url.module';

@Module({
  imports: [
    ApiManagerModule,
    CheckUrlModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production').required(),
        PORT: Joi.number().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync(options()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

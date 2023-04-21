import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { APP_GUARD } from '@nestjs/core';
import { DatabaseModule } from '@database/database';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SecurityModule } from './security/security.module';
import { AuthGuard } from './security/guards/auth.guard';
import { RolesGuard } from './security/guards/roles.guard';
import { AccountsModule } from './api/accounts/accounts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
      validationSchema: Joi.object({
        // DATABASE VALIDATION
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_SCHEMA: Joi.string().required(),
        // JWT VALIDATION
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
        // PORT VALIDATION
        NODE_PORT: Joi.number().required(),
        // REDIS VALIDATION
        REDIS_HOST: Joi.string().required(),
        REDIS_PORT: Joi.number().required(),
        REDIS_PASSWORD: Joi.string().required(),
        REDIS_USERNAME: Joi.string().required(),
        // GRPC VALIDATION
        GRPC_HOST: Joi.string().required(),
        GRPC_PACKAGE: Joi.string().required(),
        GRPC_PROTO_PATH: Joi.string().required(),
        // RABBITMQ VALIDATION
        RABBITMQ_HOST: Joi.string().required(),
        RABBITMQ_QUEUE: Joi.string().required(),
        RABBITMQ_USERNAME: Joi.string().required(),
        RABBITMQ_PASSWORD: Joi.string().required(),
        // KAFKA VALIDATION
        KAFKA_HOST: Joi.string().required(),
        KAFKA_CLIENT_ID: Joi.string().required(),
        // MQTT VALIDATION
        MQTT_HOST: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    SecurityModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web/www'),
      renderPath: '/',
      serveStaticOptions: {
        extensions: ['ejs'],
      },
    }),
    AccountsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}

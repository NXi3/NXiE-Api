import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { microServices } from '@configuration/configuration/function/microservice';
import { setupSwagger } from '@configuration/configuration/function/swagger';

const chalk = require('chalk');
declare const module: any;

async function bootstrap() {
  // CORE SERVER
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn', 'debug'],
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT'],
    },
  });

  // CORE BACKUP SERVER
  app.useStaticAssets(join(__dirname, './web/assets'));
  app.setBaseViewsDir(join(__dirname, '../web/www'));
  app.setViewEngine('ejs');

  const globalPrefix = 'v1';
  app.setGlobalPrefix(globalPrefix);
  const p = process.env.NODE_PORT || 3021;
  const d = process.env.DISCORD_PORT || 3022;

  microServices();
  setupSwagger(app);
  await app.listen(p, () => {
    console.log(
      chalk
        .hex('#ffdd00')
        .bold(`---| [NXiE: Global Api] http://localhost:${p}/${globalPrefix}`),
    );
  });
  await app.startAllMicroservices();

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
void bootstrap();

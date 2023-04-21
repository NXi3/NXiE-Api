import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DiscordModule } from "./discord.module";
import { setupSwagger } from "@configuration/configuration/function/swagger";

const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('../../api/src/config/discord.config');

async function bootstrap() {
  // DISCORD SERVER
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  const discord = await NestFactory.create<NestExpressApplication>(
    DiscordModule,
    {
      logger: ['error', 'warn', 'debug'],
      cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT'],
      },
      // httpsOptions,
    },
  );

  const globalPrefix = 'v2';
  discord.setGlobalPrefix(globalPrefix);
  const p = process.env.DISCORD_PORT || 3022;

  client.once(Events.ClientReady, (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
  });

  setupSwagger(discord);
  await client.login(token);
  await discord.listen(p, () => {
    console.log(`Listening at http://localhost:${p}/${globalPrefix}`);
  });
}
void bootstrap();

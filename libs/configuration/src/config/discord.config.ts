import { registerAs } from '@nestjs/config';

export default registerAs('discord', () => ({
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  redirectUri: process.env.DISCORD_REDIRECT_URI,
  maintainerId: process.env.DISCORD_MAINTAINER_ID,
  token: process.env.DISCORD_TOKEN,
  prefix: process.env.DISCORD_PREFIX,
  port: +process.env.DISCORD_PORT,
  guildId: process.env.DISCORD_GUILD_ID,
}));

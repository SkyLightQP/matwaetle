import dotenv from 'dotenv';
import log4js from 'log4js';
import Discord from 'discord.js';
import MessageEvent from './events/MessageEvent';

export const logger = log4js.getLogger();
export const client = new Discord.Client();

dotenv.config();

log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    default: {
      type: 'file',
      filename: 'logs/matwaetle.log',
      pattern: '-yyyy-MM-dd',
      compress: true
    }
  },
  categories: {
    default: {
      appenders: ['default', 'console'],
      level: 'DEBUG'
    }
  }
});
logger.level = 'ALL';

client.on('ready', () => {
  logger.info('Matawetle bot logged successfully');
});

MessageEvent();

client.login(process.env.BOT_TOKEN);

import log4js from 'log4js';
import Discord from 'discord.js';
import MessageEvent from './events/MessageEvent';
import config from './config';

export const logger = log4js.getLogger();
export const client = new Discord.Client();

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

client.login(config.BOT_TOKEN);

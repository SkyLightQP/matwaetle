import { client, logger } from '../index';
import { COMMAND_PREFIX, getCommand } from '../commands';
import config from '../config';

const MessageEvent = (): void => {
  client.on('message', (msg) => {
    if (msg.content.startsWith(COMMAND_PREFIX)) {
      const name = msg.content
        .substring(2)
        .split(' ')[0];

      const args = msg.content.split(' ').slice(1);
      const command = getCommand(name);

      if (!command) return;

      command.run(args);
    }

    if (!config.IS_LOGGING_MESSAGE) return;

    if (msg.channel.type === 'dm') {
      logger.info(`[DM] @${msg.author.username} : ${msg.content}`);
      return;
    }

    const channelName = msg.guild?.channels.cache.get(msg.channel.id)?.name;
    logger.info(`[${msg.guild?.name}#${channelName}] @${msg.author.username} : ${msg.content}`);
  });
};

export default MessageEvent;

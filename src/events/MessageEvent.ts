import { client } from '../index';
import { COMMAND_PREFIX, getCommand } from '../commands';

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
  });
};

export default MessageEvent;

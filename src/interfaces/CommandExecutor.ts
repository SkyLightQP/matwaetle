import { Message } from 'discord.js';

interface CommandExecutor {
  name: string;

  alias: string[];

  run: (msg: Message, args: string[]) => void;
}

export default CommandExecutor;

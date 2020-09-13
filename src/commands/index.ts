import CommandExecutor from '../interfaces/CommandExecutor';

export const COMMAND_PREFIX = '!!';

const commandMap: Record<string, CommandExecutor> = {};

export const addCommand = (command: CommandExecutor): void => {
  commandMap[command.name] = command;
  command.alias.forEach((cmd) => {
    commandMap[cmd] = command;
  });
};

export const getCommand = (key: string): CommandExecutor => {
  return commandMap[key];
};

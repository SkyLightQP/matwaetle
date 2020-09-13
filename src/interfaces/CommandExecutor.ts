interface CommandExecutor {
  name: string;

  alias: string[];

  run: (args: string[]) => void;
}

export default CommandExecutor;

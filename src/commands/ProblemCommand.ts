import Discord, { Message } from 'discord.js';
import CommandExecutor from '../interfaces/CommandExecutor';

class ProblemCommand implements CommandExecutor {
  alias: string[] = ['출제', '출'];

  name = 'problem';

  run = (msg: Message, args: string[]): void => {
    if (!msg.member?.hasPermission('ADMINISTRATOR')) return;
    if (args.length <= 0) {
      msg.channel.send('명령어 사용방법이 잘못되었습니다.');
      return;
    }

    const embed = new Discord.MessageEmbed()
      .setTitle('asd')
      .setColor('#009874');

    const template = (n: string) => (
      `
      https://www.acmicpc.net/problem/${n}
      분류: ||{분류}||
      `.trim()
    );

    args.forEach((text) => {
      embed.addField(`#${text} {NAME}`, template(text), false);
    });

    msg.channel.send(embed);
  };
}

export default ProblemCommand;

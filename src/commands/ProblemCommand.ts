import Discord, { Message, TextChannel } from 'discord.js';
import CommandExecutor from '../interfaces/CommandExecutor';
import config from '../config';

class ProblemCommand implements CommandExecutor {
  alias: string[] = ['출제', '출'];

  name = 'problem';

  run = async (msg: Message, args: string[]): Promise<void> => {
    if (!msg.member?.hasPermission('ADMINISTRATOR')) return;
    if (args.length <= 0) {
      await msg.reply('명령어 사용방법이 잘못되었습니다.');
      return;
    }

    const chan = msg.guild?.channels.cache.get(config.CHANNEL_ID) as TextChannel;
    if (chan === undefined) {
      await msg.reply('채널을 찾을 수 없습니다.');
      return;
    }

    const template = (n: string) => (
      `
      https://www.acmicpc.net/problem/${n}
      분류: ||{분류}||
      `.trim()
    );

    const embed = new Discord.MessageEmbed()
      .setTitle('asd')
      .setColor('#009874');

    args.forEach((text) => {
      embed.addField(`#${text} {NAME}`, template(text), false);
    });

    await chan.send(embed);
  };
}

export default ProblemCommand;

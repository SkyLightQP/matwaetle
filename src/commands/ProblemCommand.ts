import Discord, { Message, TextChannel } from 'discord.js';
import dateFormat from 'dateformat';
import CommandExecutor from '../interfaces/CommandExecutor';
import config from '../config';
import getBaekjoonData, { Tag } from '../services/solved';

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

    const date = dateFormat(new Date(), 'mm월 dd일');

    const template = (n: string, tags: Tag[]) => (
      `
      https://www.acmicpc.net/problem/${n}
      분류: ||${tags.join(', ')}||
      `.trim()
    );

    const embed = new Discord.MessageEmbed()
      .setTitle(date)
      .setColor('#009874');

    const promises = args.map((n) => getBaekjoonData(n));
    const result = await Promise.all(promises);

    result.forEach((item) => {
      if (item === undefined) return;
      embed.addField(`#${item.id} ${item.title}`, template(item.id, item.tags), false);
    });

    await chan.send(embed);
  };
}

export default ProblemCommand;

const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
const config = require("../config.json");

exports.run = async (client, message, args) => {
          var toplamüye = message.guild.memberCount
          var online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size
          var Sesli = message.guild.members.cache.filter(s => s.voice.channel).size;
          var Satuke = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes(config.tag)).size;
          

          const embed = new MessageEmbed()
              .setColor('RANDOM')
              .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
              .setFooter(config.Footer)
              .setTimestamp()
              .setDescription(`
\`•\` Sunucumuzda şuanda toplam **${toplamüye}** üye bulunmakta.
\`•\` Sunucumuzda **${online}** aktif kişi bulunmakta.
\`•\` Tagımızı alarak ailemize destek olan **${Satuke}** kişi bulunmaktadır.
\`•\` Sesli sohbetlerde toplam **${Sesli}** kişi var.`)
    message.channel.send(embed)
    message.react(config.onay);
}
module.exports.config = {
    name: "say",
    description: "say",
    usage: "say",
    enabled: true,
    aliases: ["say","SAY","Say"],
  };


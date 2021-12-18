const { MessageEmbed } = require("discord.js");
const teyitci = require("../models/Teyitci.js");
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true })).setColor(client.config.embedColor);
  let memberData = await teyitci.findById(member.id);
  if (!memberData) return message.channel.send(embed
    .setDescription(`${member} Adlı kullanıcının teyit verisini bulamadım.`));
    message.react(client.config.onay);
  message.channel.send(`${member}, \`${memberData.teyitler}\` teyitin bulunmaktadır`).then(x => x.delete({ timeout: 10000 }));
};

module.exports.config = {
  name: "teyitbilgi",
  description: "Belirtilen yetkilinin teyit bilgisi.",
  usage: "teyitbilgi <@üye>",
  aliases: ["teyit-bilgi","kayıtsay","teyitler","teyitsay","ks",""  ],
};

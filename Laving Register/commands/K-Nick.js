const { MessageEmbed } = require("discord.js");
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true })).setColor(client.config.embedColor);
  if (!member) return message.channel.send(embed.setDescription("Kullanıcı belirtmelisin")).then(x => x.delete({ timeout: 5500 }));
  if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(embed.setDescription(`${member} bu işlemi gerçekleştiremiyorum`)).then(x => x.delete({ timeout: 5000 }));
  var newName;
  args = args.filter(a => a.trim().length).slice(1);
  if (client.config.name_age) {
    let name = args.filter(a => isNaN(a)).map(a => a.charAt(0).replace("i", "İ").toUpperCase() + a.slice(1)).join(" ");
    let age = args.find(a => !isNaN(a)) || undefined;
    if (!name || !age) return message.channel.send(embed.setDescription(`Geçerli bir isim ve yaş belirtmelisin!`)).then(x => x.delete({ timeout: 5000 }));
    newName = `${member.user.tag.includes(client.config.tag) ? client.config.tag : client.config.defaultTag} ${name} | ${age}`;
  } else {
    newName = `${member.user.tag.includes(client.config.tag) ? client.config.tag : client.config.defaultTag} ${args.join(" ")}`;
  };
  member.setNickname(newName).catch(err => { return undefined; });
  message.react(client.config.onay);
};

module.exports.config = {
  name: "isim",
  description: "Belirtilen üyenin ismini düzenler.",
  usage: "isim <@üye> <isim> [yaş]",
  aliases: ["nick", "name", "İ","i"],
};

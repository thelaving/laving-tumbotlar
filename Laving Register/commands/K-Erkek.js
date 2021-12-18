const { MessageEmbed } = require("discord.js");
const teyitci = require("../models/Teyitci.js");
const kayitlar = require("../models/Kayıtlar.js");
const config = require("../config.json")


module.exports.run = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
  .setColor(client.config.embedColor);
  if (!member) return message.channel.send(embed
    .setDescription("Geçerli bir \`@Satuke/ID\` belirtmelisin"))
    .then(x => x.delete({ timeout: 5500 }));
  if (message.member.roles.highest.position <= member.roles.highest.position) 
  return message.channel.send(embed.setDescription(`${member} Bu işlemi gerçekleştiremiyorum (üst/aynı) yetkidesiniz`))
  .then(x => x.delete({ timeout: 5500 }));
  if (args[1]) {
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
    await member.setNickname(newName).catch(err => { return undefined; });
  };
      message.react(client.config.onay);
  if (client.config.unregisterRoles.some(r => member.roles.cache.has(r))) {
    await teyitci.findByIdAndUpdate(message.author.id, { $inc: { teyitler: 1 } }, { upsert: true });
    await kayitlar.findByIdAndUpdate(member.id, { $push: { kayitlar: [{ isim: member.displayName, roller: client.config.boyRoles, tarih: Date.now() }] } }, { upsert: true });
  };
  await member.roles.set(member.roles.cache.map(r => r.id).filter(r => !client.config.unregisterRoles.includes(r) && !client.config.girlRoles.includes(r)).concat(client.config.boyRoles)).catch(err => { return undefined; });
  let kanal = member.guild.channels.cache.find(r => r.id === config.chatKanal);
  kanal.send(`${config.kalp} ${member} Aramıza katıldı, Hoşgeldin!`).then(x => x.delete({ timeout: 15000 }));
  };
module.exports.config = {
  name: "erkek",
  description: "Belirtilen üyeyi erkek olarak kaydeder.",
  usage: "erkek <@üye> [isim yaş]",
  aliases: ["e", "boy", "man","E","Erkek"],
};

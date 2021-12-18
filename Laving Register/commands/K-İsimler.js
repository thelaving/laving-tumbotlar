const { MessageEmbed } = require("discord.js");
const kayitlar = require("../models/Kayıtlar.js");

module.exports.run = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true })).setColor("RANDOM");
  if (!member) return message.channel.send(embed.setDescription("Geçerli bir \`@Satuke/ID\` belirtmelisin")).then(x => x.delete({ timeout: 5000 }));
  let memberData = await kayitlar.findById(member.id);
  if (!memberData) return message.channel.send(embed.setDescription(`${member} üyesinin kayıt geçmişini bulamadım`));
  message.channel.send(embed.setDescription(`${member} **Kullanıcısının kayıt geçmişi** \n\n${memberData.kayitlar.reverse().slice(0, 10).map((data, index) => `\`${index+1}.\` ${data.isim} (${data.roller.map(r => `<@&${r}>`).join(", ")}) - ${new Date(data.tarih).toTurkishFormat()}`).join("\n")}`));
  message.react(client.config.onay);
};

module.exports.config = {
  name: "kayıtlar",
  description: "Belirtilen üyenin kayıt geçmişi.",
  usage: "kayıtlar <@üye>",
  enabled: true,
  aliases: ["isimler", "teyitler"],
};
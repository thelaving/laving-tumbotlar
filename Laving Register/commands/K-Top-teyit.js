const { MessageEmbed } = require("discord.js");
const teyitci = require("../models/Teyitci.js");
const config = require('../config.json')
module.exports.run = async (client, message, args) => {
  let embed = new MessageEmbed().setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true })).setColor(client.config.embedColor);
  let data = await teyitci.find().sort({ teyitler: "descending" });
  message.channel.send(embed.setDescription(`Teyit Listesi \n\n ${data.length ? data.map((d, index) => `\`${index+1}.\` <@${d._id}>`).join("\n") : "Teyitçi bulunamadı.."}`)).then(x => x.delete({ timeout: 5000 }));
  };

module.exports.config = {
  name: "Topteyit",
  description: "Top 20 teyitçi listesi.",
  usage: "top20",
  enabled: true,
  aliases: ["topteyit"],
};

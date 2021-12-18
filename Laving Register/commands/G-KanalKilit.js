const Discord = require('discord.js');
const config = require('../config.json');
exports.run = (client, message, args) => {

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("Yetkin Yok!");
let channel = message.channel;
let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Kilitleyen Kişi: '+message.author.tag);
channel.send(new Discord.MessageEmbed().setColor('RANDOM').setTimestamp().setAuthor(message.guild.name, message.guild.iconURL({dynamic: true})).setFooter(config.Footer).setDescription("Kanal Kitlendi.").setFooter(config.Footer));
};
module.exports.config = {
    name: "kanal-kilit",
    description: "Kanalın Yazma Engeli Koyar.",
    usage: "kanal-kilit",
    enabled: true,
    aliases: ["kanal-kilit","kilit","lock","kilit"],
  };


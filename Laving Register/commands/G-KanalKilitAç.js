const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args) => {
if(!message.member.hasPermission('MESSAGE_SEND')) return message.channel.send("Yetkin Yok!");

let channel =  message.channel;


let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Kilidi Açan '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('#2F3136')
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
.setFooter(config.Footer)
.setTimestamp()
.setDescription("Kanal Kilidi Açıldı."));

};

module.exports.config = {
    name: "unlock",
    description: "Kanalın Yazma Engelini Kaldırır",
    usage: "kilit-ac",
    enabled: true,
    aliases: ["unlock","kanal-kilit ac","kilit ac"],
  };


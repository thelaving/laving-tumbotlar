const { MessageEmbed } = require('discord.js')
const data = require('quick.db')
const config = require('../config.json')

exports.run = async (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed()
.setDescription(`${message.author} Bu komudunu kullanmaya yetkin yetmiyor.`)
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setColor(config.NoEmbed))

let members = message.guild.members.cache.filter(member => member.roles.cache.has(config.Katıldı) && member.voice.channelID != config.ToplantıKanal);
members.array().forEach((member, index) => {setTimeout(() => {member.roles.remove(config.Katıldı).catch();}, index * 1250)});

let verildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has(config.Katıldı) && !member.user.bot)
verildi.array().forEach((member, index) => {setTimeout(() => {member.roles.add(config.Katıldı).catch();},
index * 1250)});

message.channel.send(new MessageEmbed()
.setDescription(`${config.yıldız} <@&${config.Katıldı}> Rolü <#${config.ToplantıKanal}> Kanalında Bulunan Üyelere Dağıtılmaya Başladı.\n\n ${config.True} Toplam Rol Verilen Kullanıcı: \n \`${verildi.size}\` \n\n ${config.False} Rolleri Geri Alınan Kullanıcı Sayısı: \n \`${members.size}\``)
.setColor('#2F3136')
.setTitle(`Toplantı yoklaması alındı..`)
.setFooter(config.Footer)
.setThumbnail(message.guild.iconURL({dynamic:true})))}

module.exports.config = {
    name: "toplantı",
    description: "",
    usage: "toplantı",
    enabled: true,
    aliases: ["katıldı","toplantı","yoklama"],
  };

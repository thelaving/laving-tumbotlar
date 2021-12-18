const Discord = require("discord.js");
const config = require("../config.json");


module.exports.run = async (client, message, args) => {

if(![(client.config.Owner)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`)
.setColor('2F3136')
.setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));


let satuke = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)

if(args[0] == "ver") {
    satuke.forEach(r => {
r.roles.add(client.config.unregisterRoles)
})
const khold = new Discord.MessageEmbed()
.setFooter(config.Footer)
.setAuthor(" "+message.author.username +" ", message.author.avatarURL())
.setColor("2F3136")
.setDescription("Sunucuda rolü olmayan \`"+ satuke.size +"\` kişiye \`Kayıtsız\` rolü verildi")
message.channel.send(khold).then(m => message.react((client.config.onay)))
} else if(!args[0]) {
const khold1 = new Discord.MessageEmbed()
.setAuthor(""+message.author.username +" ", message.author.avatarURL())
.setFooter(config.Footer)
.setColor("2F3136")
.setDescription("Sunucumuzda rolü olmayan \`"+ satuke.size +"\` kişi var.")
message.channel.send(khold1)
}}
module.exports.config = {
    name: "rolsüz",
    description: "kayıtsız rolüne sahip olmayan üyeleri kayıtsız rolü verir.",
    usage: "rolsüz",
    enabled: true,
    aliases: ["rolsüz"],
  };
  
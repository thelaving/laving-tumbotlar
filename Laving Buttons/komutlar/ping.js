const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

let pingmesaj;
let pingdurum;

let mesaj;
  let mesajdurum;
if(Date.now() - message.createdAt < 100){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt < 60){
mesaj = ":yellow_circle:"
mesajdurum = "#ffff00"
}
if(Date.now() - message.createdAt < 30){
mesaj = ":green_circle: "
mesajdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 100){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}

if(Date.now() - message.createdAt > 60){
mesaj = ":yellow_circle:"
mesajdurum = "#ffff00"
}
if(Date.now() - message.createdAt > 150){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 250){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 500){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 1000){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}
/*for(var emojilers in client.emojiler){
let emojis = client.emojis.get(emojilers)
}*/
if(client.ws.ping < 100){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}
if(client.ws.ping < 60){
pingmesaj = ":yellow_circle:"
pingdurum = "#ffff00"
}
if(client.ws.ping < 30){
pingmesaj = ":green_circle: "
pingdurum = "#66ff00"
}
if(client.ws.ping > 100){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}

if(client.ws.ping > 60){
pingmesaj = ":yellow_circle:"
pingdurum = "#ffff00"
}
if(client.ws.ping > 150){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}
if(client.ws.ping > 250){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}
if(client.ws.ping > 500){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}
if(client.ws.ping > 1000){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username + " kullanıcısı tarafından istenildi!",message.author.avatarURL)
.setDescription(`Gecikme: ${client.ws.ping+ "ms"} ${pingmesaj}\n\nMesaj Gecikmesi: ${(Date.now() - message.createdAt)+ "ms"} ${mesaj}`)
.setColor(pingdurum)
.setFooter(client.user.username, client.user.avatarURL)
message.channel.send(embed)

}


  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
};
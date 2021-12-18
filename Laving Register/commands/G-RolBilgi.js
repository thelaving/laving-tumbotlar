const Config = require('../config.json');
const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
let lavingmbed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(Config.Footer, message.guild.iconURL({dynamic: true}))
.setColor(Config.embedColor)


let lavingRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 
if (!lavingRole) return message.channel.send(lavingmbed.setDescription(`${Config.false} Geçerli bir rol belirtmeli/Rol ID'si girmelisin.`))

  
let satArray = new Array();
let lavingcimÜyeler = lavingRole.members.forEach(lavingcim => {satArray.push(`<@!${lavingcim.id}> ( \`${lavingcim.id}\` )`);})


message.channel.send(lavingmbed.setDescription(`
${lavingRole} (\`${lavingRole.id}\`) adlı role ait bilgiler aşağıda verilmiştir.

${Config.Emoji} **Rol Rengi:** \`${lavingRole.hexColor}\`
${Config.Emoji} **Rol ID'si:** \`${lavingRole.id}\` 
${Config.Emoji} **Roldeki Kişi Sayısı**: \`${lavingRole.members.size}\`


**Roldeki kişiler:**

${lavingRole.members.size <= 15 ? satArray.join("\n") : `Bulamadım. ( **${lavingRole.members.size}** kişi var! )`}
`))
  
};

module.exports.config = {
    name: "rolbilgi",
    description: "Rolün infolarını atar",
    usage: "rolbilgi",
    guildOnly: false,
    enabled: true,
    aliases: ["rb", "rolinfo","rol-bilgi"],
  };

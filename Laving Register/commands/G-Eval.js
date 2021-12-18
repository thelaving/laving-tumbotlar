const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async (client, message, args, color, prefix) => {
    if(message.author.id !== "bot sahibi id") return message.reply(`bu komutu sadece Bot Sahibi kullanabilir!`);
    try {
        let codein = args.join(" ");
        let code = eval(codein);

      if (codein.length < 1) return message.reply(`deneyebilmek için bir kod girmelisin!`)
      
        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Kod', `\`\`\`js\n${codein}\`\`\``)
        .addField(`\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
      let embed2 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .addField('» Hata', "\`\`\`js\n"+e+"\n\`\`\`")
        message.channel.send(embed2);
    }
}

module.exports.config = {
  name: "eval",
  description: "eval",
  usage: "eval",
  enabled: true,
  aliases: ["eval"],
};

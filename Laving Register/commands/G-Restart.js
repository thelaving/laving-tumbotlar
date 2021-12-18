const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send("Bot yeniden başlatılıyor").then(msg => {
        console.log("[BOT] Yeniden başlatılıyor");
        process.exit(0);
    });

};

module.exports.config = {
    name: "restart",
    usage: "reboot",
    enabled: true,
    aliases: ["reboot","restart"],
  };

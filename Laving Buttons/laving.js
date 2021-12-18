const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
const laving = require('discord-buttons')
laving(client)

var prefix = ayarlar.lavingPrefix;

client.on("ready", () => {
  console.log(`${client.user.tag} bot aktif knk`);
});

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

require("./util/eventLoader")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`[laving] ${files.length} adet komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`[laving] yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.login(ayarlar.lavingToken);

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});


client.on("message", (message) => {

    if (message.content !== ".buttons-system" || message.author.bot) return;
  
  let EtkinlikKatılımcısı = new laving.MessageButton()
    .setStyle('red') 
    .setLabel('Etkinlik Katılımcısı') 
    .setID('EtkinlikKatılımcısı'); 

  let ÇekilişKatılımcısı = new laving.MessageButton()
    .setStyle('green') 
    .setLabel('Çekiliş Katılımcısı') 
    .setID('ÇekilişKatılımcısı');
  
  message.channel.send(`
**${ayarlar.lavingSunucuName}**
 
Çekiliş Katılımcısı alarak **nitro, spotify, netflix ve benzeri çekilişlere katılıp ödül sahibi** olabilirsiniz.

Aşağıda bulunan butonlardan **Etkinlik Katılımcısı alarak konserlerimizden, oyunlarımızdan, ve etkinliklerimizden** faydalanabilirsiniz.

\`NOT:\` Kayıtlı , kayıtsız olarak hepiniz bu kanalı görebilmektesiniz. Bu sunucumuzda everyone here atılmayacağından dolayı kesinlikle rollerinizi almayı unutmayın.
`, { 
    buttons: [ EtkinlikKatılımcısı, ÇekilişKatılımcısı]
});
});
  
client.on('clickButton', async (button) => {

    if (button.id === 'EtkinlikKatılımcısı') {
        if (button.clicker.member.roles.cache.get((ayarlar.lavingEtkinlikKatılımcısı))) {
            await button.clicker.member.roles.remove((ayarlar.lavingEtkinlikKatılımcısı))
            await button.reply.think(true);
            await button.reply.edit("Etkinlik Katılımcısı rolü başarıyla üzerinizden alındı!")
        } else {
            await button.clicker.member.roles.add(((ayarlar.lavingEtkinlikKatılımcısı)))
            await button.reply.think(true);
            await button.reply.edit("Etkinlik Katılımcısı rolünü başarıyla aldınız!")
        }
    }


    if (button.id === 'ÇekilişKatılımcısı') {
        if (button.clicker.member.roles.cache.get((ayarlar.lavingÇekilişKatılımcısı))) {
            await button.clicker.member.roles.remove((ayarlar.lavingÇekilişKatılımcısı))
            await button.reply.think(true);
            await button.reply.edit(`Çekiliş Katılımcısı rolü başarıyla üzerinizden alındı!`)
        } else {
            await button.clicker.member.roles.add((ayarlar.lavingÇekilişKatılımcısı))
            await button.reply.think(true);
            await button.reply.edit(`Çekiliş Katılımcısı rolünü başarıyla aldınız!`)
        }

    }
  });
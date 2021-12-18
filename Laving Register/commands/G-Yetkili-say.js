const moment = require("moment");
const config = require("../config.json");
moment.locale("tr");

module.exports.run = async (client, message, args, embed) => {
    if(message.member.hasPermission('ADMINISTRATOR')) {
        let qqq = args[0];
        if(!qqq) return message.channel.send(embed.setDescription(`Bir veri belirtiniz.`)).catch(e => { })
    
        if(qqq == "say"){
        let sesdedeğil = message.guild.members.cache.filter(x => x.roles.cache.has(config.Yetkili)).filter(y => !y.voice.channel&& y.presence.status!="offline")
    message.channel.send(`
Seste Olmayan Yetkililer:
${sesdedeğil.map(s => `${s}`).join(', ')}`)
      }
    
    if(qqq == "dm"){
      let kullanıcı = message.guild.members.cache.filter(s => s.roles.cache.has(config.Yetkili)).filter(s => !s.voice.channel).size
    for(var i = 0;i < kullanıcı;i++){
      let a = message.guild.members.cache.filter(s => s.roles.cache.has(config.Yetkili)).filter(s => !s.voice.channel).map(a => a)[i]
      const userDM = await a.createDM()
    try {
      await userDM.send("Sese girsene güzel qardesm")
    } catch {
      await message.channel.send(`<@${a.user.id}> adlı kullanıcının dm kutusu kapalı. Müsaitsen public odalara değilsen alone odalarına geçiş yapabilirsin`)
    }
    }
      }
    
    } else 
     return message.channel.send(embed.setDescription(`Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsin.`))
}

module.exports.config = {
    name: "yetkili",
    description: "yetkili",
    usage: "yetkili",
    enabled: true,
    aliases: ["yetkili"],
  };
  
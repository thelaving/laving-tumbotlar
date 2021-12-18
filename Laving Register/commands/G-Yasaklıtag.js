const { MessageEmbed } = require("discord.js");
const ayar = require("../config.json")
const db = require("quick.db")
exports.run = async(client, message, args) => {
    
    let embed = new MessageEmbed().setColor(ayar.embedColor).setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    if (args[0] === "ekle") {
        let data = await db.get(`yasaklitaglar.${message.guild.id}`) || []
        let hedeftag = args[1]
        if (!hedeftag) return message.channel.send(embed.setDescription(`${message.author}, Bir tag belirtin.`))
        if (data.includes(hedeftag)) return message.channel.send(embed.setDescription(`Bu tag zaten yasaklı listede bulunmakta.`))
        db.push(`yasaklitaglar.${message.guild.id}`, hedeftag)
        message.channel.send(embed.setDescription(`\`${hedeftag}\` Tagı yasaklı taglar listesine eklendi.
        `))
    }
    if (args[0] === "liste") {
        let data = await db.get(`yasaklitaglar.${message.guild.id}`) || []
        message.channel.send(embed.setDescription(`\`•\` ${data.join('\n\`•\` ') || 'Bulunamadı.'}`))
    }
    if (args[0] === "kaldır") {
        let data = await db.get(`yasaklitaglar.${message.guild.id}`) || []
        let hedeftag = args[1]
        if (!hedeftag) return message.channel.send(embed.setDescription(`${message.author}, Bir tag belirtin.`))
        if (!data.includes(hedeftag)) return message.channel.send(embed.setDescription(`Bu tag zaten yasaklı listede bulunmamakta.`))
        db.set(`yasaklitaglar.${message.guild.id}`, data.filter(x => x !== hedeftag))
        message.channel.send(embed.setDescription(`\`•\` \`${hedeftag}\` Tagı yasaklı tag listesinden kaldırıldı.
`))
}
    if (!args[0]) {
        message.channel.send(embed.setDescription(`\`•\` Hatalı kullanım Örnek: .yasaklıtag ekle & kaldır & liste`))
    }

};
module.exports.config = {
    name: "yasaklı-tag",
    description: "",
    usage: "yasaklıtag",
    enabled: true,
    aliases: ["yasaklıtag"],
  };
  
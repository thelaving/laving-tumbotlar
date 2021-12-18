const Discord = require('discord.js');
const laving = require("./ayarlar.json");
const config = require("./ayarlar.json");
const lavingcode = require("./ayarlar.json");
const lavingfx = require("./ayarlar.json")


const selamlı = [];
for (let index = 0; index < config.botTokenleri.length; index++) {
    const token = config.botTokenleri[index];
    const client = new Discord.Client();
    client.login(token);
    let sanullcum;
    client.on('ready', async () => {
        setInterval(() => {
        const samustik = Math.floor(Math.random() * (lavingfx.botStatus.length));
        client.user.setActivity(`${lavingfx.botStatus[samustik]}`, {type: "LISTENING"});
    }, 10000);
        client.user.setStatus("idle");
        console.log(`${client.user.tag} olarak giriş yapıldı.`);
        sanullcum = await client.channels.cache.get(lavingcode.sesKanallarıID[index]).join().catch(err => console.error("Sorun Oluştu."));
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === lavingcode.sesKanallarıID[index])) {
            if (cur.channelID === prev.channelID) return;
            if (selamlı.includes(cur.member.id) && (cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(laving.registerRolID).rawPosition)) {
                ses = await sanullcum.play('./lavingVoice/lavinghosgeldin.mp3');
                return;
            }
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get(laving.registerRolID).rawPosition)) {
                ses = await sanullcum.play('./lavingVoice/lavinghosgeldin.mp3');
                selamlı.push(cur.member.user.id);
                console.log(selamlı);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get(laving.registerRolID).rawPosition) {
                ses = await sanullcum.play('./lavingVoice/yetkili.mp3');
                selamlı.push(cur.member.user.id);
                console.log(selamlı);
            }
        }
        if (prev.channel && (prev.channel.id === lavingcode.sesKanallarıID[index]) && (prev.channel.members.size === 1) && ses) ses.end();
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) sanullcum = await client.channels.cache.get(lavingcode.sesKanallarıID[index]).join();
    })

    client.on('voiceStateUpdate', async (___, newState) => {
        if (
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id &&
        !newState.selfDeaf
        ) {
        newState.setSelfDeaf(true);
        }
        });

}

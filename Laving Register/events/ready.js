module.exports = (client) => {
    client.user.setPresence({ activity: { name: client.config.botStatus }, status: "dnd" });
    let botVoiceChannel = client.channels.cache.get(client.config.VOİCECHANNEL);
    if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Ses Kanalına Bağlanamadım"));
  
  }
  module.exports.config = {
    name: "ready"
  };
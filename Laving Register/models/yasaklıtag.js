const mongoose = require('mongoose');

const yasaklıtag = mongoose.Schema({
    guildID: String,
    adminID: String,
    Tag: String,
    Reason: String,
    Date: Number
});

module.exports = mongoose.model("yasaklıtag", yasaklıtag);
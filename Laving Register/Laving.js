const { Client, Collection, MessageEmbed } = require("discord.js");
const client = new Client({ fetchAllMembers: true });
const fs = require("fs");
const config = client.config = require("./config.json");
const db = require('quick.db')
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
moment.locale("tr");

const mongoose = require("mongoose");
const { SSL_OP_ALL, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
mongoose.connect(config.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(x => 
console.log(`Mongo Bağlantısı Kuruldu.`)).catch(err => console.error(err));
mongoose.connection.on('error', (err) => { console.log(`MongoDB Error : ${err}`);
});

Array.prototype.clear = function() {
  let newArray = [];
  for (let i of this) {
   if (!newArray.includes(i) && i !== "" && i !== " ") newArray.push(i);
  };
  return newArray;
};

Date.prototype.toTurkishFormat = function() {
  return moment.tz(this, "Europe/Istanbul").format('LLL');
};

const events = fs.readdirSync("./events");
for (let event of events) {
  if (!event.endsWith(".js")) continue;
  let prop = require(`./events/${event}`);
  if (!prop.config) continue;
  if (prop.config.name !== "ready") {
    client.on(prop.config.name, prop);
  } else {
    client.on(prop.config.name, () => prop(client));
  };
};

client.commands = new Collection();
client.aliases = new Collection();
const commands = fs.readdirSync("./commands");
for (let command of commands) {
  if (!command.endsWith(".js")) continue;
  let prop = require(`./commands/${command}`);
  client.commands.set(prop.config.name, prop);
  if (prop.config.aliases) {
    prop.config.aliases.clear().forEach(aliase => {
      client.aliases.set(aliase, prop.config.name);
    });
  };
};

client.on("guildMemberAdd", async(member) => {
{member.roles.add(config.unregisterRoles)}
})

client.on("guildMemberAdd", member => {
require("moment-duration-format")
var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-999])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9999])/g, d => {
return {'0': `:0_:`, '1': `:1_:`, '2': `:2_:`, '3': `:3_:`, '4': `:4_:`, '5': `:5_:`, '6': `:6_:`, '7': `:7_:`, '8': `:8_:`, '9': `:9_:`}[d];})}
const kanal = member.guild.channels.cache.find(r => r.id === config.HoşgeldinKanalID)
let user = client.users.cache.get(member.id);
require("moment-duration-format");
const kurulus = new Date().getTime() - user.createdAt.getTime();  
var kontrol;
if (kurulus < 604800) kontrol = config.false
if (kurulus > 604800) kontrol = config.True

moment.locale("tr");
kanal.send(`${config.kalp} ${member} (\`${member.id}\`) Aramıza Hoşgeldin! :tada::tada::tada:
  
Hesabın **${moment(member.user.createdTimestamp).format("LLL")}** tarihinde açılmış (**${moment(member.user.createdAt).add(5, 'days').fromNow().replace("Bir kaç saniye", " ")}**) önce oluşturulmuş `+kontrol+`
  
Seninle beraber sunucumuz **${member.guild.memberCount}** kişi sayısına ulaştı, yetkililer senin ile ilgilenecektir!
  
Sunucu kurallarımız <#${config.rules}> kanalında belirtilmiştir, Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.`)})
  
  
 //!gir yazarsanız örnek giriş mesajı atar
client.on("message", async message => {
  if (message.content === "!gir") {if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için **Yönetici** yetkisine sahip değilsin!");
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

  client.on("messageDelete", async message => {
    if (message.channel.type === "dm" || !message.guild || message.author.bot) return;
    await db.set(`snipe.${message.guild.id}.${message.channel.id}`, { yazar: message.author.id, yazilmaTarihi: message.createdTimestamp, silinmeTarihi: Date.now(), dosya: message.attachments.first() ? true : false });
    if (message.content) db.set(`snipe.${message.guild.id}.${message.channel.id}.icerik`, message.content);
  });

client.on("guildMemberAdd", async laving => {
const kanal = laving.guild.channels.cache.find(r => r.id === config.HoşgeldinKanalID);
const tarih = new Date().getTime() - laving.user.createdAt.getTime();
   if (tarih < 1000*360*247 ) {
   laving.roles.add(config.ŞüpheliHesap)
   laving.roles.remove(config.unregisterRoles)
   kanal.send(`${laving} ${laving.id} Adlı kullanıcının hesabı yeni açıldığı için jaile atıldı.`)
   laving.send(`Hesabın 7 günden az bi sürede açıldığı için jaile atıldın. Eğer bir yanlışlık olduğunu düşünüyorsan yanda bulunan yetkililere yazabilirsin.`)}
}); 

const yavsamaSöz = [
  
  'Varlığın dünyada cenneti yaşatıyor bana.',
  'Bir gülüşü var, kelebek görse ömrü uzar.',
  'çünkü sen gittiğinde sokak lambaları gözümü kamaştırıyor', 
  'Seni düşlerken bir tebessüm beliriyor suretimde.',
  'Gölgene sığınırım en çaresiz anımda.',
  'Gamzen diyorum bir ömür sevmelik.',
  'Sen sevilmek için yaratılmışsın.',
  'Varsan var yoksan yokum.',
  'Bu dünya için fazla mükemmelsin.',
  'Yüzümdeki oluşan gülümsemenin sebebisin.',
  'Damlaya damlaya büyütüyorum sevgimi.',
  'Gecemi aydınlatan yıldızımsın.',
  'Gözlerin gökyüzü kadar uçsuz bucaksız.',
  'Ömrümün en güzel mevsimi sensin.',
  'Başıma gelen güzel şeylerin nedeni hep sensin.',
  'Gülüşünde bir şey var hep içime dokunur.',
  'Kendimi sende bulduğum için bu kadar güzelsin.',
  'Varlığın bir çocuğun gülüşü gibi; öyle güzel öyle masum ki.',
  'Uyanmak istemediğim en güzel rüyam sensin.',
  'Masallar elbette güzel; kahramanı sen isen.',
  'Her adımımda senin adını fısıldar yollar…',
  'Sen bana aitsin, Balık denize, bulut gökyüzüne ait.',
  'Her bir kirpiğinin ayrı bir büyüsü var zihnimde.',
  'Derdim de devam da sen oldun haberin yok.',
  'Sen varsan yeter ömrüme. Gerisi hikâye.',
  'Seni kokladığımda, nefes aldığımı hatırlıyorum.',
  'Lütfen üzerine alın! Kimseyi görmedim ben, senden daha güzel gülen.',
  'Fazlası zarar olmayan iki şey; biri sen biri kokun.',
  'Kokunu içime çektiğimde nefes aldığımı anlıyorum.',
  'Bir gülümse bana, o eşsiz gülüşünle güneş açsın hayatımda.',
  'Nasıl anlatsam seni sana? Gökyüzü gibi gözlerinde kaybolabiliyormuş insan.',
  'Sen varsın, bundan güzel bir teselli var mı dünyada?',
  'Gözlerimin gördüğü en güzel şey sensin.',
  'Sesini duydum, huzura kavuştum.',
  'Kalbinin güzelliği yüzüne vurmuş, ben buna ilk kez şahit oluyorum.',
  'Sen benim yeniden kendime gelişim gibisin. Seni görmek sarsıyor insanı, insan yeryüzünde melek görüyor sanki.',
  'Sen hayatın bana verdiği en güzel armağansın.',
  'Bu yeryüzünde sevilmeye dair her şey sende toplanmış',
  'Her şey çirkinken sen nasıl bu kadar güzelsin?',
  'Sen bu dünyada gülüşü olan tek manzaramsın.',
  'Benim bütün hevesim sende. Seninle ilgili her şey heyecanlandırıyor beni.',
  'Benim sadece seninle olmaya ihtiyacım var. Her şey sende toplanmış.',
  'Sen bana hep öyle tatlı tatlı bak emi.',
  'Sen benim için teksin ve bana yetersin.',
  'Biliyor musun? ilk seninle bir dilenciye para verdim. İnanmadığım yapmam dediğim her şeyi seninle yaptım.',
  'Bir buse misali öpünce izi kalansın.',
  'Gel benim ekmeğim, suyum, aşım ol',
  'Şimdi divaneye döndüm seni görünce.',
  'Çiçekler bile kıskanıyor bak aşkımızı.',
  'Senin aşkın beni gece gözlüm deli ediyor.',
  'Kurumuş bir ağaç gibiydim, sen geldin yeniden yeşerdim',
  'Küçük bir çocuğun masumiyeti gibisin sevmeye kıyamadığım.',
  'Senle aşkı öğrendim, sevgiyi, paylaşmayı…',
  'Gülerken kendini görsen inan kendi ömrüne ömür katardın.',
  'Dertlerini bana ver sevinçler senin olsun..',
  'Etrafımda olduğunda başka bir şeye ihtiyacım olmuyor.',
  'Sen olmadan nasıl var olacağımı bilmiyorum.',
  'Güneşe gerek yok, gözlerindeki sıcaklık içimi ısıtıyor.',
  'Gözlerimi senden alamıyorum, benim tüm dünyam sensin.',
  'Mutluluk ne diye sorsalar, cevabı gülüşünde ve o sıcak bakışında arardım.',
  'Bir şeyler ters gittiğinde, aramak istediğim ilk kişi sensin.',
  'Kusursuz tavırların var. Korkunç kararlar verdiğimde beni yargılamadığın için sana minnettarım.',
  'Baharı anımsatan kokunu içime çektiğimde, her şey mümkün görünüyor.',
  'Bu kadar güzel bakma, başka biri daha sana aşık olur diye ödüm kopuyor.',
  'Güzel yüzünü göremediğim için geceleri hiç sevmiyorum.',
  'Dünyadaki tüm şiirler sana yazılmış gibi hissettiriyorsun.',
  'Sen benim aldığım en doğru kararsın.',
  'Sen gülümseyince bulutlar dağılıyor göz bebeğim.',
  'Sabah uykusu kadar güzelsin.',
  'Onu Bunu Boşver de bize gel 2 bira içelim.',
  'Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum',
  'Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın',
  'Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.',
  'Işık oluyorsun karanlık gecelerime.',
  'Gözlerin adeta bir ay parçası.',
  'Sen benim bu hayattaki en büyük duamsın.',
  'Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.',
  'Huzur kokuyor geçtiğin her yer.',
  'Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.',
  'laving seni çok sevdi...',
  'Sen benim düşlerimin surete bürünmüş halisin.',
  'Mucizelerden bahsediyordum.',
  'Yaşanılacak en güzel mevsim sensin.',
  'Sıradanlaşmış her şeyi, ne çok güzelleştiriyorsun.',
  'Gönlüm bir şehir ise o şehrin tüm sokakları sana çıkar.',
  'Birilerinin benim için ettiğinin en büyük kanıtı seninle karşılaşmam.',
  'Denize kıyısı olan şehrin huzuru birikmiş yüzüne.',
  'Ben çoktan şairdim ama senin gibi şiiri ilk defa dinliyorum.',
  'Gece yatağa yattığımda aklımda kalan tek gerçek şey sen oluyorsun.',
  'Ne tatlısın sen öyle. Akşam gel de iki bira içelim.',
  'Bir gamzen var sanki cennette bir çukur.',
  'Gecemi aydınlatan yıldızımsın.',
  'Ponçik burnundan ısırırım seni',
  'Bu dünyanın 8. harikası olma ihtimalin?',
  'fıstık naber?',
  'Dilek tutman için yıldızların kayması mı gerekiyor illa ki? Gönlüm gönlüne kaydı yetmez mi?',
  'Süt içiyorum yarım yağlı, mutluluğum sana bağlı.',
  'Müsaitsen aklım bu gece sende kalacak.',
  'Gemim olsa ne yazar liman sen olmadıktan sonra...',
  'Gözlerimi senden alamıyorum çünkü benim tüm dünyam sensin.',
  'Sabahları görmek istediğim ilk şey sensin.',
  'Mutluluk ne diye sorsalar- cevabı gülüşünde ve o sıcak bakışında arardım.',
  'Hayatım ne kadar saçma olursa olsun, tüm hayallerimi destekleyecek bir kişi var. O da sensin, mükemmel insan.',
  'Bir adada mahsur kalmak isteyeceğim kişiler listemde en üst sırada sen varsın.',
  'Sesini duymaktan- hikayelerini dinlemekten asla bıkmayacağım. Konuşmaktan en çok zevk aldığım kişi sensin.',
  'Üzerinde pijama olsa bile, nasıl oluyor da her zaman bu kadar güzel görünüyorsun? Merhaba, neden bu kadar güzel olduğunu bilmek istiyorum.',
  'Çok yorulmuş olmalısın. Bütün gün aklımda dolaşıp durdun.',
  'Çocukluk yapsan da gönlüme senin için salıncak mı kursam?',
  'Sen birazcık huzur aradığımda gitmekten en çok hoşlandığım yersin.',
  'Hangi çiçek anlatır güzelliğini? Hangi mevsime sığar senin adın. Hiçbir şey yeterli değil senin güzelliğine erişmeye. Sen eşsizsin...',
  'Rotanızı geçen her geminin ışığıyla değil, yıldızlara göre ayarlayın.',
  'Telaşımı hoş gör, ıslandığım ilk yağmursun.',
  'Gülüşün ne güzel öyle- cumhuriyetin gelişi gibi...',
  'Domates biber patlıcan, bu gece sana saplıcam...',
  'Bu ego nereden geliyor. Kuyudan mı çıkarıyorsun?',
  'Çok tatlısın :blush:',
];
client.on("message", async message => {
  if(message.channel.id !== config.chatKanal) return;
  let YavsakBot = db.get('chatiltifat');
  await db.add("chatiltifat", 1);
  if(YavsakBot >= 90) { 
    db.delete("chatiltifat");
    const random = Math.floor(Math.random() * ((yavsamaSöz).length - 1) + 1);
    message.reply(`${(yavsamaSöz)[random]}`);
  };
});

client.on("guildMemberAdd", member => {
if(member.user.username.includes("ꑕ") && (member.user.username.includes("salvo")) && (member.user.username.includes("Salvo") && (member.user.username.includes("ˡᵒʳᶤᵉᶰ")))){
member.roles.add(config.yasaklitag)
member.roles.remove(config.unregisterRoles)
member.send("__Sunucumuzun Yasaklı Tagında Bulunuyorsunuz, Şüpheli Kısmına Atıldınız.__")}
})

client.on("guildMemberAdd", member => {
const lavingcik = member.guild.channels.cache.find(r => r.id === config.HoşgeldinKanalID);
if(member.user.username.includes(config.tag)){
member.roles.add(config.Tagges)
lavingcik.send(`${member} (\`${member.id}\`) Sunucuya Taglı Bir Şekilde Giriş Yaptı!`)}
})

async function yasaklitag() {
  let guild = client.guilds.cache.get(config.guildID);
  let data = await db.get(`yasaklitaglar.${guild.id}`) || []  
guild.members.cache.filter(s => data.some(x => s.user.username.includes(x)) && !s.roles.cache.has("yasaklı tag ıd")).forEach(m => m.roles.set(['yasaklı tag ıd']))}
setInterval(async() => {
yasaklitag()
}, 60000)

client.login(config.botToken).then(x => console.log(`${client.user.tag} Bot Aktif`)).catch(err => console.error(`Bota Giriş Yapılamadı.!\n ∞ Hata : ${err}`))
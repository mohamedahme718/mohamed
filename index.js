const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); 

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
//ثبات فويس 24 ساعه v13 بدون اي مشاكل
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch("وهنا اي دي الروم") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: "وهنا اي دي السيرفر", 
       selfMute: true,
       selfDeaf: true,
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 
//https://ra3dstudio.com CopyRight Codes
client.login("حط هنا توكين حسابك يا احمد");
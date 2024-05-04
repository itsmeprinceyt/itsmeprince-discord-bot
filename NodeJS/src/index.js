require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('messageCreate',(message)=>{
    if(message.author.bot){
        return;
    }
    if(message.content === 'ping'){
        message.reply('ping')
        message.react('💀')
    }
})

client.on('ready',(c)=>{
    console.log(`${c.user.tag} is online and running now .... `)
})
client.login(process.env.TOKEN);

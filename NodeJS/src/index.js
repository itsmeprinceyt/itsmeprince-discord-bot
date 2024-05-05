import { Client, IntentsBitField, EmbedBuilder } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

//Some variables
const GenshinImpactEmbedMessageAuthorName = `Genshin Impact - Notification`;
const GenshinImpactEmbedMessageAuthorIconUrl = `https://cdn.discordapp.com/attachments/1179367744014143510/1236539625657466911/112385885_p0_master1200.jpg`;
const HonkaiStarRailEmbedMessageAuthorName = `Honkai Star Rail - Notification`;
const HonkaiStarRailEmbedMessageAuthorIconUrl = `https://cdn.discordapp.com/attachments/1179367744014143510/1236547000787533824/gp3ebskaz85c1.png`;

//handles all the messages

client.on("messageCreate", (message) => {
  
});

// embedded messages 

client.on("interactionCreate", async (interaction) => {
  if (interaction.user.username.toLowerCase() === "itsmeprinceyt"){
    if(interaction.commandName === 'genshin_impact_primogem'){
      const Code = interaction.options.get("enter-code").value;
      const InputImage = interaction.options.get('image').value;
      const CodeDescription = interaction.options.get('notification-title').value;
      const cleanURL = InputImage.trim().replace(/&$/, '');

      const embed = new EmbedBuilder()
      .setAuthor({
          name: GenshinImpactEmbedMessageAuthorName,
          iconURL: GenshinImpactEmbedMessageAuthorIconUrl,
      })
      .setTitle(CodeDescription)
      .setDescription(`
      Code: [${Code}](https://genshin.mihoyo.com/en/gift?code=${Code})\n
      Click on the code or redeem through website: https://genshin.mihoyo.com/en/gift
      `)
      .setImage(cleanURL)
      
      await interaction.reply({
        content: "<@&969188588870852628>",
        embeds: [embed],
        allowedMentions: { parse: ['roles'] },
        fetchReply: true,
      }).then(message => {
        message.react('977169624187695104').catch(console.error);
      }).catch(console.error);

      console.log(`Genshin Impact Redeem Code Message has been delivered: ${Code}`);
    }
    if(interaction.commandName === 'honkai_star_rail_jades'){
      
      const Code = interaction.options.get("enter-code").value;
      const InputImage = interaction.options.get('image').value;
      const CodeDescription = interaction.options.get('notification-title').value;
      const cleanURL = InputImage.trim().replace(/&$/, '');

      const embed = new EmbedBuilder()
      .setAuthor({
          name: HonkaiStarRailEmbedMessageAuthorName,
          iconURL: HonkaiStarRailEmbedMessageAuthorIconUrl,
      })
      .setTitle(CodeDescription)
      .setDescription(`
      Code: [${Code}](https://hsr.hoyoverse.com/gift?code=${Code})\n
      Click on the code or redeem through website: https://hsr.hoyoverse.com/gift
      `)
      .setImage(cleanURL)
      
      await interaction.reply({
        content: "<@&1124817467257139270>",
        embeds: [embed],
        allowedMentions: { parse: ['roles'] },
        fetchReply: true,
      }).then(message => {
        message.react('1131210828704645175').catch(console.error);
      }).catch(console.error);

      console.log(`Honkai Star Rail Redeem Code Message has been delivered: ${Code}`);
    }
  }
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online and running now .... `);
});

client.login(process.env.TOKEN);

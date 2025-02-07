import {
  Client,
  IntentsBitField,
  EmbedBuilder,
  ActivityType,
} from "discord.js";
import dotenv from "dotenv";
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

const WutheringWavesEmbedMessageAuthorName = `Wuthering Waves  - Notification`;
const WutheringWavesEmbedMessageAuthorIconUrl = `https://cdn.discordapp.com/attachments/1179367744014143510/1242897713314533486/ameFGPYH-qhOSxdsSA_fA54I4Ch-eO8y7Pj4x6W6ejQkvKbhVjCehKlPerBY9X2L8ek.png`;

const AuthorIconUrl =
  "https://cdn.discordapp.com/attachments/1179367744014143510/1237388845969047582/Logo_1_JPEG.png";

const ItsMePrinceShopWelkin =
  "https://cdn.discordapp.com/attachments/1179367744014143510/1237461191593431120/Welkin.png";
const ItsMePrinceShopExpressPass =
  "https://cdn.discordapp.com/attachments/1179367744014143510/1237461202574250177/Express_Pass.png";

const ItsMePrinceShopLunite = 
  "https://cdn.discordapp.com/attachments/1179367744014143510/1255807322220003328/Lunite.png";

//handles all the messages + embed messages
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  try {
    if (message.content === "..instagram") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("@itsmeprinceyt - instagram")
        .setDescription("https://www.instagram.com/itsmeprinceyt");

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..youtube") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("I Am Prince- YouTube")
        .setDescription("https://www.youtube.com/@itsmeprinceyt");

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..discord") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("ItsMe Prince Server - Discord Invite Link")
        .setDescription("https://discord.gg/HgXNs4p5cx");

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..clips") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("I Am Prince: Clips - YouTube")
        .setDescription(
          "https://www.youtube.com/playlist?list=PLiFooJ43_R5R2usnfqq4D1JkG2Bz1A8VB"
        );

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..sofiguide") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("Guide: Discord Sofi Bot - YouTube")
        .setDescription("https://www.youtube.com/playlist?list=PLiFooJ43_R5Q1zTlBETetSZhVNUnMJj12");

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..ppdevice" || message.content === "..ppphone") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle(`I'm currently using IQOO NEO 7 ( 12+256 Variant) - Black`);

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..pppc" || message.content === "..pppcspecs") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle(`PC Specs`).setDescription(`
      CPU🐤Ryzen 5 3600
      
      RAM🐤A-DATA XPG DDR4 (8GBx2)
      
      MOTHERBOARD🐥MSI B450 PRO-VDH-MAX
      
      GRAPHIC CARD🐥INNO3D NVIDIA GEFORCE RTX 3060 Twin X2 OC 
      
      PSU✨Antec 550 Watt 80 Plus
      
      SSD🐥A-DATA GAMMIX 256 GB M.2
      
      SSD 2🐥& Patriot 1TB SATA SSD
      
      CABINET🐤Ant Esports ICE-200TG
      `);

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..whatsapp") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle(`ItsMe Prince Broadcast Channel - Whatsapp`)
        .setDescription(
          `https://www.whatsapp.com/channel/0029Va5MEeX2UPBIHUMyQY2z`
        );

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..gi") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl }).setTitle(`ItsMe Prince - Game UID`).setDescription(`Genshin Impact UID: 889406482`);

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..bgmi") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl }).setTitle(`ItsMe Prince - Game UID`).setDescription(`BGMI UID: 5651014966`);

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..hsr") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl }).setTitle(`ItsMe Prince - Game UID`).setDescription(`Honkai Star Rail UID: 802581646 `);

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..ww") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl }).setTitle(`ItsMe Prince - Game UID`).setDescription(`Wuthering Waves UID: 900584281 [SEA]`);

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..artwork") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle("ItsMe Prince0 Bot - Artwork")
        .setDescription("A huge thank you to <@1094512747137474560> for creating this amazing artwork for the ItsMe Prince bot! If you're looking for fantastic artwork commissions, be sure to reach out to them!")
        .setImage("https://cdn.discordapp.com/attachments/1179367744014143510/1245863281826988072/Final_ItsMe_Prince_Bot_Logo.png");

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content === "..help") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle(`ItsMe Prince Bot - Commands`)
        .setDescription(
          "```..instagram``````..youtube``````..discord``````..clips``````..sofiguide``````..ppdevice``````..pppc``````..whatsapp``````..math``````..gi``````..hsr``````..ww``````..bgmi```\n```..artwork``````..help```"
        );

      await message.reply({
        embeds: [embed],
      });
      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
    if (message.content.startsWith("..math")) {
      const expression = message.content.slice("..math ".length).trim();
      try {
        if (expression === "" || expression === null) {
          throw error;
        }
        const result = eval(expression);
        const embed = new EmbedBuilder()
          .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
          .setTitle("Maths Calculator - ItsMe Prince Bot")
          .setDescription(`Result: ${result}`);
        await message.reply({
          embeds: [embed],
        });

        console.log(
          `\nUser: [${message.author.username}]\nCommand: ${
            message.content
          }\nResponse: Sent\nTime: ${new Date()}`
        );
      } catch (error) {
        console.log(
          `\nUser: [${message.author.username}]\nCommand: ${
            message.content
          }\nResponse: There was an error processing the expression\nTime: ${new Date()}`
        );
      }
    }
  } catch (error) {
    console.log(
      `Cannot initiate the command due to an expected error: ${error}`
    );
  }

  // Admin Commands
  if (message.author.username === "itsmeprinceyt") {
    if (message.content === "..admin") {
      const embed = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle(`ItsMe Prince Bot - Admin Commands`)
        .setDescription(
          "`/genshin_impact_primogem` • Send Primogems Notification\n`/genshin_impact_livestream` • Send Livestream Primogems Notification\n`/honkai_star_rail_jades` • Send Jades Notification\n`/wuthering_waves_astrites` • Send Astrites Notification\n`/honkai_star_rail_livestream` • Send Livestream Jades Notification\n`/in_stock_welkin` • Welkin IN STOCK\n`/in_stock_express_pass` • Express Pass IN STOCK\n`/in_stock_lunite` • Lunite Pass IN STOCK\n`/out_of_stock_welkin` • Welkin OUT OF STOCK\n`/out_of_stock_express_pass` • Express Pass OUT OF STOCK\n`/out_of_stock_lunite` • Lunite Pass OUT OF STOCK\n`/itsmeprince_changes` • Sends Changes Embed"
        );

      await message.reply({
        embeds: [embed],
      });

      console.log(
        `\nUser: [${message.author.username}]\nCommand: ${
          message.content
        }\nResponse: Sent\nTime: ${new Date()}`
      );
    }
  }
});

// slash embedded messages
client.on("interactionCreate", async (interaction) => {
  if (interaction.user.username.toLowerCase() === "itsmeprinceyt") {
    if (interaction.commandName === "in_stock_welkin") {
      const Code = interaction.options.get("price").value;

      const code =
        "```GENSHIN IMPACT - BLESSING OF THE WELKIN MOON```" +
        `\`\`\`PRICE ${Code}\`\`\``;
      const main = new EmbedBuilder()
        .setTitle("IN STOCK !!")
        .setDescription(code)
        .setImage(ItsMePrinceShopWelkin)
        .setFooter({ text: "Prices can fluctuate anytime" })
        .setTimestamp()
        .setColor(0x63ff00);

      const body = new EmbedBuilder()
        .setTitle("Read before purchasing")
        .setDescription("Read <#1177928702114406481> before proceeding")
        .setColor(0x63ff00);

      const footer = new EmbedBuilder()
        .setTitle("To Purchase")
        .setDescription(
          "**Use** <#1181972522900660264> **to initiate an order** or  **Message** <@310672946316181514>"
        )
        .setColor(0x63ff00);

      await interaction
        .reply({
          content: "<@&1179344445875953694> <@&1179346833294753874>",
          embeds: [main, body, footer],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .catch(console.error);

      console.log(
        `[IN STOCK] Genshin Impact Blessing of the Welkin Stock Updated at ${new Date()}`
      );
    }
    if (interaction.commandName === "in_stock_express_pass") {
      const Code = interaction.options.get("price").value;

      const code =
        "```HONKAI STAR RAIL - EXPRESS SUPPLY PASS```" +
        `\`\`\`PRICE ${Code}\`\`\``;
      const main = new EmbedBuilder()
        .setTitle("IN STOCK !!")
        .setDescription(code)
        .setImage(ItsMePrinceShopExpressPass)
        .setFooter({ text: "Prices can fluctuate anytime" })
        .setTimestamp()
        .setColor(0x63ff00);

      const body = new EmbedBuilder()
        .setTitle("Read before purchasing")
        .setDescription("Read <#1179353148482146404> before proceeding")
        .setColor(0x63ff00);

      const footer = new EmbedBuilder()
        .setTitle("To Purchase")
        .setDescription(
          "**Use** <#1181972522900660264> **to initiate an order** or  **Message** <@310672946316181514>"
        )
        .setColor(0x63ff00);

      await interaction
        .reply({
          content: "<@&1179344445875953694> <@&1179346833294753874>",
          embeds: [main, body, footer],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .catch(console.error);

      console.log(
        `[IN STOCK] Honkai Staril Rail Express Supply Pass Stock Updated at ${new Date()}`
      );
    }
    if (interaction.commandName === "in_stock_lunite") {
      const Code = interaction.options.get("price").value;

      const code =
        "```WUTHERING WAVES - LUNITE PASS```" +
        `\`\`\`PRICE ${Code}\`\`\``;
      const main = new EmbedBuilder()
        .setTitle("IN STOCK !!")
        .setDescription(code)
        .setImage(ItsMePrinceShopLunite)
        .setFooter({ text: "Prices can fluctuate anytime" })
        .setTimestamp()
        .setColor(0x63ff00);

      const body = new EmbedBuilder()
        .setTitle("Read before purchasing")
        .setDescription("Read <#1242938772493176973> before proceeding")
        .setColor(0x63ff00);

      const footer = new EmbedBuilder()
        .setTitle("To Purchase")
        .setDescription(
          "**Use** <#1181972522900660264> **to initiate an order** or  **Message** <@310672946316181514>"
        )
        .setColor(0x63ff00);

      await interaction
        .reply({
          content: "<@&1179344445875953694> <@&1179346833294753874>",
          embeds: [main, body, footer],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .catch(console.error);

      console.log(
        `[IN STOCK] Wuthering Waves Lunite Pass Stock Updated at ${new Date()}`
      );
    }
    if (interaction.commandName === "out_of_stock_welkin") {
      const code = "```GENSHIN IMPACT - BLESSING OF THE WELKIN MOON```";
      const main = new EmbedBuilder()
        .setTitle("OUT OF STOCK !!")
        .setDescription(code)
        .setImage(ItsMePrinceShopWelkin)
        .setColor(0xff0000);

      await interaction
        .reply({
          embeds: [main],
          fetchReply: true,
        })
        .catch(console.error);

      console.log(
        `[OUT OF STOCK] Genshin Impact Blessing of the Welkin Stock Updated at ${new Date()}`
      );
    }
    if (interaction.commandName === "out_of_stock_express_pass") {
      const code = "```HONKAI STAR RAIL - EXPRESS SUPPLY PASS```";
      const main = new EmbedBuilder()
        .setTitle("OUT OF STOCK !!")
        .setDescription(code)
        .setImage(ItsMePrinceShopExpressPass)
        .setColor(0xff0000);

      await interaction
        .reply({
          embeds: [main],
          fetchReply: true,
        })
        .catch(console.error);

      console.log(
        `[OUT OF STOCK] Honkai Staril Rail Express Supply Pass Stock Updated at ${new Date()}`
      );
    }
    if (interaction.commandName === "out_of_stock_lunite") {
      const code = "```WUTHERING WAVES - LUNITE PASS```";
      const main = new EmbedBuilder()
        .setTitle("OUT OF STOCK !!")
        .setDescription(code)
        .setImage(ItsMePrinceShopLunite)
        .setColor(0xff0000);

      await interaction
        .reply({
          embeds: [main],
          fetchReply: true,
        })
        .catch(console.error);

      console.log(
        `[OUT OF STOCK] Wuthering Waves Lunite Pass Stock Updated at ${new Date()}`
      );
    }
    if (interaction.commandName === "itsmeprince_changes") {
      const Change = interaction.options.get("change_detail").value;
      const Change_Title = interaction.options.get("change_title").value;
      const main = new EmbedBuilder()
        .setAuthor({ name: "ItsMe Prince", iconURL: AuthorIconUrl })
        .setTitle(Change_Title)
        .setDescription(Change);

      await interaction
        .reply({
          content: "<@&1124706806531371135>",
          embeds: [main],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .catch(console.error);

      console.log(`ItsMe Prince has used Changes Embed`);
    }
  }
  // Genshin Impact & Honkai Star Rail - Sending Primo/Jade notification to users!
  if (interaction.user.username.toLowerCase() === "itsmeprinceyt") {
    if (interaction.commandName === "genshin_impact_primogem") {
      const Code = interaction.options.get("enter-code").value;
      const InputImage = interaction.options.get("image").value;
      const CodeDescription =
        interaction.options.get("notification-title").value;
      const cleanURL = InputImage.trim().replace(/&$/, "");

      const embed = new EmbedBuilder()
        .setAuthor({
          name: GenshinImpactEmbedMessageAuthorName,
          iconURL: GenshinImpactEmbedMessageAuthorIconUrl,
        })
        .setTitle(CodeDescription)
        .setDescription(
          `
      Code: [${Code}](https://genshin.mihoyo.com/en/gift?code=${Code})\n
      Click on the code or redeem through website: https://genshin.mihoyo.com/en/gift
      `
        )
        .setImage(cleanURL);

      await interaction
        .reply({
          content: "<@&969188588870852628>",
          embeds: [embed],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .then((message) => {
          message.react("977169624187695104").catch(console.error);
        })
        .catch(console.error);

      console.log(
        `Redeem Code ${Code} from Genshin Impact has been generated on ${new Date()}`
      );
    }
    if (interaction.commandName === "honkai_star_rail_jades") {
      const Code = interaction.options.get("enter-code").value;
      const InputImage = interaction.options.get("image").value;
      const CodeDescription =
        interaction.options.get("notification-title").value;
      const cleanURL = InputImage.trim().replace(/&$/, "");

      const embed = new EmbedBuilder()
        .setAuthor({
          name: HonkaiStarRailEmbedMessageAuthorName,
          iconURL: HonkaiStarRailEmbedMessageAuthorIconUrl,
        })
        .setTitle(CodeDescription)
        .setDescription(
          `
      Code: [${Code}](https://hsr.hoyoverse.com/gift?code=${Code})\n
      Click on the code or redeem through website: https://hsr.hoyoverse.com/gift
      `
        )
        .setImage(cleanURL);

      await interaction
        .reply({
          content: "<@&1124817467257139270>",
          embeds: [embed],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .then((message) => {
          message.react("1131210828704645175").catch(console.error);
        })
        .catch(console.error);

      console.log(
        `Redeem Code ${Code} from Honkai Star Rail has been generated on ${new Date()}`
      );
    }
    if (interaction.commandName === "wuthering_waves_astrites") {
      const Code = interaction.options.get("enter-code").value;
      const InputImage = interaction.options.get("image").value;
      const CodeDescription =
        interaction.options.get("notification-title").value;
      const cleanURL = InputImage.trim().replace(/&$/, "");

      const embed = new EmbedBuilder()
        .setAuthor({
          name: WutheringWavesEmbedMessageAuthorName,
          iconURL: WutheringWavesEmbedMessageAuthorIconUrl,
        })
        .setTitle(CodeDescription)
        .setDescription(`Code: ${Code}`)
        .setImage(cleanURL);

      await interaction
        .reply({
          content: "<@&1242892684226592920>",
          embeds: [embed],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .then((message) => {
          message.react("1242905478346969098").catch(console.error);
        })
        .catch(console.error);

      console.log(
        `Redeem Code ${Code} from Wuthering Waves has been generated on ${new Date()}`
      );
    }

    if (interaction.commandName === "genshin_impact_livestream") {
      let Code1 = interaction.options.get("first-code").value;
      Code1 = Code1.toUpperCase();

      let Code2 = interaction.options.get("second-code").value;
      Code2 = Code2.toUpperCase();

      let Code3 = interaction.options.get("third-code").value;
      Code3 = Code3.toUpperCase();

      const InputImage = interaction.options.get("image").value;
      const cleanURL = InputImage.trim().replace(/&$/, "");

      const Title = interaction.options.get("notification-title").value;

      const header = new EmbedBuilder()
        .setAuthor({
          name: GenshinImpactEmbedMessageAuthorName,
          iconURL: GenshinImpactEmbedMessageAuthorIconUrl,
        })
        .setTitle(Title)
        .setImage(cleanURL);

      const main = new EmbedBuilder().setDescription(
        `Code 1: [${Code1}](https://genshin.mihoyo.com/en/gift?code=${Code1})\nCode 2: [${Code2}](https://genshin.mihoyo.com/en/gift?code=${Code2})\nCode 3: [${Code3}](https://genshin.mihoyo.com/en/gift?code=${Code3})`
      );

      const footer = new EmbedBuilder()
        .setTitle(
          "Click on the code to redeem or use the following website to redeem!"
        )
        .setDescription(`https://genshin.mihoyo.com/en/gift`);

      await interaction
        .reply({
          content: "<@&969188588870852628>",
          embeds: [header, main, footer],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .then((message) => {
          message.react("977169624187695104").catch(console.error);
        })
        .catch(console.error);

      console.log(
        `Special Livestream redeem Code ${Code1} ${Code2} ${Code2} from Genshin Impact has been generated on ${new Date()}`
      );
    }
    if (interaction.commandName === "honkai_star_rail_livestream") {
      let Code1 = interaction.options.get("first-code").value;
      Code1 = Code1.toUpperCase();

      let Code2 = interaction.options.get("second-code").value;
      Code2 = Code2.toUpperCase();

      let Code3 = interaction.options.get("third-code").value;
      Code3 = Code3.toUpperCase();

      const InputImage = interaction.options.get("image").value;
      const cleanURL = InputImage.trim().replace(/&$/, "");

      const Title = interaction.options.get("notification-title").value;

      const header = new EmbedBuilder()
        .setAuthor({
          name: HonkaiStarRailEmbedMessageAuthorName,
          iconURL: HonkaiStarRailEmbedMessageAuthorIconUrl,
        })
        .setTitle(Title)
        .setImage(cleanURL);

      const main = new EmbedBuilder().setDescription(
        `Code 1: [${Code1}](https://hsr.hoyoverse.com/gift?code=${Code1})\nCode 2: [${Code2}](https://hsr.hoyoverse.com/gift?code=${Code2})\nCode 3: [${Code3}](https://hsr.hoyoverse.com/gift?code=${Code3})`
      );

      const footer = new EmbedBuilder()
        .setTitle(
          "Click on the code to redeem or use the following website to redeem!"
        )
        .setDescription(`https://hsr.hoyoverse.com/gift`);

      await interaction
        .reply({
          content: "<@&1124817467257139270>",
          embeds: [header, main, footer],
          allowedMentions: { parse: ["roles"] },
          fetchReply: true,
        })
        .then((message) => {
          message.react("1131210828704645175").catch(console.error);
        })
        .catch(console.error);

      console.log(
        `Special Livestream redeem Code ${Code1} ${Code2} ${Code2} from Honkai Star Rail has been generated on ${new Date()}`
      );
    }
  }
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online and running now .... `);
  let currentStatus = "dnd";
  client.user.setStatus(currentStatus);
  client.user.setActivity({
    name: "over PP 🥸",
    type: ActivityType.Watching,
  });
  console.log(`${c.user.tag} is in ${currentStatus} state .... `);
});

client.login(process.env.TOKEN);

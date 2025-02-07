import { REST, Routes, ApplicationCommandOptionType } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

async function MainRegistering(){
  const commands = [
      {
        name: 'genshin_impact_primogem',
        description: 'Sends primo redeem code embed!',
        options: [
          {
            name: 'enter-code',
            description: 'Enter primo code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'notification-title',
            description: 'Enter rewards of this code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'image',
            description: 'Add image url',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
      {
        name: 'genshin_impact_livestream',
        description: 'Sends special livestream redeem codes',
        options: [
          {
            name: 'first-code',
            description: 'Enter primo code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'second-code',
            description: 'Enter primo code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'third-code',
            description: 'Enter primo code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'notification-title',
            description: 'Enter rewards of this code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'image',
            description: 'Add image url',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
      {
        name: 'honkai_star_rail_jades',
        description: 'Sends jade redeem code embed!',
        options: [
          {
            name: 'enter-code',
            description: 'Enter jade code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'notification-title',
            description: 'Enter rewards of this code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'image',
            description: 'Add image url',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
      {
        name: 'honkai_star_rail_livestream',
        description: 'Sends special livestream redeem codes',
        options: [
          {
            name: 'first-code',
            description: 'Enter jade code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'second-code',
            description: 'Enter jade code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'third-code',
            description: 'Enter jade code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'notification-title',
            description: 'Enter rewards of this code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'image',
            description: 'Add image url',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
      {
        name: 'wuthering_waves_astrites',
        description: 'Sends Astrites redeem code embed!',
        options: [
          {
            name: 'enter-code',
            description: 'Enter jade code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'notification-title',
            description: 'Enter rewards of this code',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'image',
            description: 'Add image url',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
      {
        name: 'in_stock_welkin',
        description: 'Stock available!',
        options: [
          {
            name: 'price',
            description: 'Enter the price of the item',
            type: ApplicationCommandOptionType.Number,
            required: true,
          },
        ],
      },
      {
        name: 'in_stock_express_pass',
        description: 'Stock available!',
        options: [
          {
            name: 'price',
            description: 'Enter the price of the item',
            type: ApplicationCommandOptionType.Number,
            required: true,
          },
        ],
      },
      {
        name: 'in_stock_lunite',
        description: 'Stock available!',
        options: [
          {
            name: 'price',
            description: 'Enter the price of the item',
            type: ApplicationCommandOptionType.Number,
            required: true,
          },
        ],
      },
      {
        name: 'out_of_stock_welkin',
        description: 'Stock available!',
      },
      {
        name: 'out_of_stock_express_pass',
        description: 'Stock available!',
      },
      {
        name: 'out_of_stock_lunite',
        description: 'Stock available!',
      },
      {
        name: 'itsmeprince_changes',
        description: 'Sends a ping when there is a server change',
        options: [
          {
            name: 'change_title',
            description: 'Enter title',
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: 'change_detail',
            description: 'Enter changes',
            type: ApplicationCommandOptionType.String,
            required: true,
          }
        ],
      },
  ];

  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

  (async () => {
      try {
          console.log('Registering all slash commands ... ')
          await rest.put(
              Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID),
              {body: commands}
          )

          console.log('All slash commands have been registered and updated!')
      } catch (error) {
          console.log(`There was an error: ${error}`)
      }
  })();
}

MainRegistering();
export default MainRegistering;
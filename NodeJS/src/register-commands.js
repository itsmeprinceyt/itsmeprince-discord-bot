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
            require: true,
          },
          {
            name: 'notification-title',
            description: 'Enter rewards of this code',
            type: ApplicationCommandOptionType.String,
            require: true,
          },
          {
            name: 'image',
            description: 'Add image url',
            type: ApplicationCommandOptionType.String,
            require: true,
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
            require: true,
          },
          {
            name: 'notification-title',
            description: 'Enter rewards of this code',
            type: ApplicationCommandOptionType.String,
            require: true,
          },
          {
            name: 'image',
            description: 'Add image url',
            type: ApplicationCommandOptionType.String,
            require: true,
          },
        ],
      }
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
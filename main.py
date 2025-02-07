import discord
import re

custom_commands = {

    "..instagram":'''    > **You can Follow me on Instagram using this link: :arrow_heading_down: **
                        > 
                        > https://www.instagram.com/itsmeprinceyt''',

    "..youtube":'''     > **You can Subscribe to our YouTube Channel using this link: :arrow_heading_down: **
                        > 
                        > https://www.youtube.com/@itsmeprince0''',

    "..discord":'''     > **Discord Official Invite Link: :arrow_heading_down: **
                        > 
                        > https://discord.gg/HgXNs4p5cx''',

    "..clips":'''       > **YouTube Livestream Funny Clips: :arrow_heading_down: **
                        > 
                        > https://www.youtube.com/playlist?list=PLE3BGeUsE3iqhCkZaXgHTPnN8s__8uNCt''',

    "..sofiguide":'''   > **Sofi - Discord Card Game Full Guide in [HINDI]
                        > https://youtu.be/kfrl1yO8sUA''',

    "..ppdevice":'''    > I'm currently using **IQOO NEO 7 ( 12+256 Variant)** - *Black*''',

    "..pppc":'''```PC Specs
CPU🐤Ryzen 5 3600
RAM🐤A-DATA XPG DDR4 (8GBx2)
MOTHERBOARD🐥MSI B450 PRO-VDH-MAX
GRAPHIC CARD🐥INNO3D NVIDIA GEFORCE RTX 3060 Twin X2 OC 
PSU✨Antec 550 Watt 80 Plus
SSD🐥A-DATA GAMMIX 256 GB M.2
SSD 2🐥& Patriot 1TB SATA SSD
CABINET🐤Ant Esports ICE-200TG
```''',

    "..whatsapp":'''     > **You can Join My WhatsApp Broadcast Channel Using This Link :arrow_heading_down: **
                        > 
                        > https://www.whatsapp.com/channel/0029Va5MEeX2UPBIHUMyQY2z''',

    "..invite":'''       > **You can invite me into your server using this link :arrow_heading_down: **
                        > 
                        > [Click To Invite 'ItsMe Prince Helper Bot'](https://discord.com/api/oauth2/authorize?client_id=1154795653235482685&permissions=2183991393344&scope=bot)''',
# Leave this as it is
    "..help":"""```
COMMANDS

..instagram
..youtube
..discord
..clips
..sofiguide
..ppdevice
..pppc
..whatsapp
..invite
..math

- Use '!..{command}' to receive response in DM 
```""",
}

def calculate_math_operations(expression):
    try:
        return str(eval(expression))
    except Exception as e:
        return str(e)

def get_response(message: str, author: discord.Member) -> str:
    p_message = message.lower()

    if p_message.startswith("..math "):
        math_expression = p_message[6:]
        math_expression = re.sub(r"[^0-9+\-*/()\s]", "", math_expression)
        result = calculate_math_operations(math_expression)
        return f"> **Result: {result}**"

    if p_message.startswith("..ty "):
        mentioned_user = p_message.split(' ', 1)[1]
        return f"> **Thank You {mentioned_user} For Your Great Work In PPMINITY GUILD!**"

    if p_message in custom_commands:
        return custom_commands[p_message]

    if p_message == "hey bot u suck":
        return "Not Better than Your Mom! :fire: :fire: "

    return ""

async def send_message(message, user_message, is_private, author):
    response = get_response(user_message, author)
    if response:
        await author.send(response) if is_private else await message.channel.send(response)

def run_discord_bot():
    TOKEN = 'MTE1NDc5NTY1MzIzNTQ4MjY4NQ.GW-FoA.nhC-Nzi1pZwt-D-8-RdcYSApzRun4ALQQ5hJ8A'
    intents = discord.Intents.default()
    intents.message_content = True
    client = discord.Client(intents=intents)

    @client.event
    async def on_message(message):
        if message.author == client.user:
            return

        username = str(message.author)
        user_message = str(message.content)
        channel = str(message.channel)

        print(f'{username} said: "{user_message}" ({channel}')

        if user_message[0] == '!':
            user_message = user_message[1:]
            await send_message(message, user_message, is_private=True, author=message.author)
        else:
            await send_message(message, user_message, is_private=False, author=message.author)

    client.run(TOKEN)

if __name__ == '__main__':
    run_discord_bot()

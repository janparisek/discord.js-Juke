// External dependencies
import { Client, IntentsBitField } from 'discord.js'

// Internal dependencies
import handleInteractions from './handleInteractions.js'
// import registerCommands from './registerCommands.js'

// Configuration
import TOKEN from '../token.js'

const intents = new IntentsBitField()
intents.add(IntentsBitField.Flags.Guilds)

const bot = new Client({ intents })

// await registerCommands('429671088704716800', TOKEN)
handleInteractions(bot)

bot
  .login(TOKEN)
  .then(() => {
    console.log(`Logged in as ${bot.user?.tag}`)
  })
  .catch((error) => {
    console.error('Error logging in.')
    console.error(error)
  })

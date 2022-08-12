// External dependencies
import { Client } from 'discord.js'

// Internal dependencies
import handleInteractions from './handleInteractions.js'
// import registerCommands from './registerCommands.js'

// Configuration
import TOKEN from '../token.js'

// await registerCommands('429671088704716800', TOKEN)

const bot = new Client({ intents: [] })

bot
  .login(TOKEN)
  .then(() => {
    console.log(`Logged in as ${bot.user?.tag}`)
  })
  .catch((error) => {
    console.error('Error logging in.')
    console.error(error)
  })

handleInteractions(bot)

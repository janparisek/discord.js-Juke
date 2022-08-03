// External dependencies
import { Client } from 'discord.js'

// Internal dependencies
import handleInteractions from './src/handleInteractions.mjs'
import registerCommands from './src/registerCommands.mjs'

// Configuration
import TOKEN from './token.mjs'

registerCommands('429671088704716800', TOKEN)

/*
const bot = new Client()

bot.login(TOKEN)
  .then(() => {
    console.log(`Logged in as ${bot.user.tag}`)
  })
  .catch(error => {
    console.error('Error logging in.')
    console.error(error)
  })

bot.on('interactionCreate', handleInteractions)
*/

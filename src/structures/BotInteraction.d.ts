import { Interaction } from 'discord.js'
import { Builder } from './Builder'

interface BotInteraction {
  data : Builder

  check(interaction : Interaction) : boolean
  run(interaction : Interaction, playerManager) : Promise<void>
}

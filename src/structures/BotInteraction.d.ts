import { Interaction } from 'discord.js'
import { Builder } from './Builder.js'
import PlayerManager from './PlayerManager.js'

interface BotInteraction {
  data: Builder

  check: (interaction: Interaction) => boolean
  run: (
    interaction: Interaction,
    playerManager: typeof PlayerManager
  ) => Promise<void>
}

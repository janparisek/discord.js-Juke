import { Interaction, SlashCommandBuilder } from 'discord.js'
import { Builder } from './Builder.js'
import PlayerManager from './PlayerManager.js'

export interface BotInteraction {
  data: Builder
  run: (
    interaction: Interaction,
    playerManager: PlayerManager
  ) => Promise<void>
}

export interface SlashCommandInteraction extends BotInteraction {
  data: SlashCommandBuilder
}

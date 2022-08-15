import { CommandInteraction, SlashCommandBuilder } from 'discord.js'
import PlayerManager from './PlayerManager.js'

export interface SlashCommandImplementation {
  data: SlashCommandBuilder,
  run: (
    interaction: CommandInteraction,
    playerManager: PlayerManager
  ) => Promise<void>
}

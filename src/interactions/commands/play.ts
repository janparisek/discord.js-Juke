// External dependencies
import { Interaction, SlashCommandBuilder } from 'discord.js'

// Internal dependencies
import { SlashCommandInteraction } from '../../structures/BotInteraction.js'
import PlayerManager from '../../structures/PlayerManager.js'

const data = new SlashCommandBuilder()
  .setName('play')
  .setDescription('Plays the provided song.')

async function run (
  interaction: Interaction,
  playerManager: PlayerManager
): Promise<void> {
  // Check if command was used in a guild
  if (!interaction.inCachedGuild()) return

  // Check if guild is available
  let guild = interaction.guild
  guild = await guild.fetch()
  if (!guild.available) return

  // Check if member is in voice channel
  const member = await interaction.member?.fetch()
  const voiceState = member.voice
  console.log(voiceState.channel)

  console.log(playerManager)
}

const commandData: SlashCommandInteraction = {
  data,
  run
}

export default commandData

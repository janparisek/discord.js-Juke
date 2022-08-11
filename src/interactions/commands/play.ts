// External dependencies
import { Interaction, SlashCommandBuilder } from 'discord.js'

// Internal dependencies
import { BotInteraction } from '../../structures/BotInteraction.js'
import PlayerManager from '../../structures/PlayerManager.js'

const data = new SlashCommandBuilder()
  .setName('play')
  .setDescription('Plays the provided song.')

function check (interaction: Interaction): boolean {
  if (!interaction.isChatInputCommand()) return false
  if (interaction.commandName !== 'play') return false
  return true
}

async function run (
  interaction: Interaction,
  playerManager: typeof PlayerManager
): Promise<void> {
  // Check if command was used in a guild
  if (!interaction.inCachedGuild()) return

  // Check if guild is available
  let guild = interaction.guild
  guild = await guild.fetch()
  if (!guild.available) return

  const member = await interaction.member?.fetch()
  const voiceState = member.voice
  console.log(voiceState.channel)

  console.log(playerManager)
}

const commandData: BotInteraction = {
  data,
  check,
  run
}

export default commandData

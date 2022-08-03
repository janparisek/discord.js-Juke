// External dependencies
import { SlashCommandBuilder } from 'discord.js'

// Internal dependencies
import Interaction from '../../structures/Interaction.mjs'

const data = new SlashCommandBuilder()
  .setName('play')
  .setDescription('Plays the provided song.')

function check (interaction) {
  if (!interaction.isChatInputCommand()) return false
  if (interaction.commandName !== 'play') return false
  return true
}

async function run (interaction, playerManager) {
  const guild = interaction.guild.fetch()

  // Check if guild is available
  if (!guild.available()) return

  const member = interaction.member.fetch()
  const voiceState = member.voice
  console.log(voiceState.channel)
}

export default class extends Interaction {
  data = data
  check = check
  run = run
}

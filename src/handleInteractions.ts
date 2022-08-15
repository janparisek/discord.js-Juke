import { Client, CommandInteraction, Interaction } from 'discord.js'
import registeredInteractions from './interactions/index.js'
import PlayerManager from './structures/PlayerManager.js'
import { SlashCommandImplementation } from './structures/InteractionImplementation.js'

const playerManager = new PlayerManager()

const commandManager: Map<string, SlashCommandImplementation['run']> = new Map()
for (const registeredInteraction of registeredInteractions) {
  commandManager.set(
    registeredInteraction.data.name,
    registeredInteraction.run
  )
}

export default function (client: Client): void {
  client.on('interactionCreate', handleInteractions)
}

function handleInteractions (interaction: Interaction): void {
  if (interaction.isChatInputCommand()) {
    handleChatInputCommand(interaction)
  } else if (interaction.isButton()) {
    handleButton(interaction)
  }
}

function handleChatInputCommand (interaction: CommandInteraction): void {
  const commandName = interaction.commandName
  const handler = commandManager.get(commandName)
  if (handler === undefined) {
    console.error(`Command with name ${commandName} does not exist.`)
    return
  }
  (handler)(interaction, playerManager) // IFE
}

function handleButton (interaction: Interaction): void {}

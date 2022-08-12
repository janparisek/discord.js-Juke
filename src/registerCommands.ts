// External dependencies
import { Routes } from 'discord.js'
import { REST } from '@discordjs/rest'

// Internal dependencies
import registeredInteractions from './interactions/index.js'

export default async function (clientId: string, token: string): Promise<void> {
  const commands = registeredInteractions.map((command) => command.data)

  const rest = new REST({ version: '10' }).setToken(token)

  await rest
    .put(Routes.applicationCommands(clientId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch((error) => {
      console.error('Could not register application commands.')
      console.error(error)
    })
}

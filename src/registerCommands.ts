// External dependencies
import { Routes } from 'discord.js'
import { REST } from '@discordjs/rest'

// Internal dependencies
import registeredInteractions from './interactions/index.js'

export default function (clientId: string, token: string): void {
  const commands = registeredInteractions.map((command) =>
    console.log(command)
  )

  /* eslint-disable */
  return;

  const rest = new REST({ version: "10" }).setToken(token);

  rest
    .put(Routes.applicationCommands(clientId), { body: commands })
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);
}

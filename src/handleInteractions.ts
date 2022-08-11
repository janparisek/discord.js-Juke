import { Interaction } from 'discord.js'
import registeredInteractions from './interactions/index.js'
import PlayerManager from './structures/PlayerManager.js'

export default function (
  interaction: Interaction,
  playerManager: typeof PlayerManager
): void {
  for (const registeredInteraction of registeredInteractions) {
    if (!registeredInteraction.check(interaction)) continue

    // Correct interaction found, run
    void registeredInteraction.run(interaction, playerManager)
    break
  }
}

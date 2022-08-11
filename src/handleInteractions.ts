import registeredInteractions from './interactions/index.js'

export default function (interaction, playerManager) {
  for (const registeredInteraction of registeredInteractions) {
    if (!registeredInteraction.check(interaction)) continue

    // Correct interaction found, run
    registeredInteraction.run(interaction, playerManager)
    break
  }
}

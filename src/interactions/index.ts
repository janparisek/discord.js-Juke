import play from './commands/play.js'

const commandClasses = [
  play
]

// Instantiate all classes
const commands = []
for (const CommandClass of commandClasses) {
  const command = new CommandClass()
  commands.push(command)
}

export default commands

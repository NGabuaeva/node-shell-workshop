function pwd () {
  process.stdin.on('data', (data) => {
    const callDirectory = process.cwd()
    if (data.toString().trim() === 'pwd') {
      process.stdout.write(callDirectory)
      process.stdout.write('\nprompt > ')
    }
  })
}

module.exports = pwd




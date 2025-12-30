import fs from 'node:fs'

export function listFiles() {
  fs.readdir('.', (err, files) => {
    if (err) {
      console.error('Error al leer el directorio:', err)
      return
    }

    files.forEach(file => {
      console.log(file)
    })
  })
}

if (import.meta.url === `file://${process.argv[1]}`) {
  listFiles()
}

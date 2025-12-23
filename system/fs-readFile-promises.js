import {readFile} from 'node:fs/promises'
import path from 'node:path'

export function readTextFile(fileName) {
  const __dirname = new URL('.', import.meta.url).pathname
  const filePath = path.join(__dirname, '..', fileName)

  return readFile(filePath, 'utf-8')
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Leyendo el primer archivo...')
  readTextFile('archivo.txt')
    .then(text => {
      console.log('primer texto:', text)
    })
    .catch(err => {
      console.error('Error leyendo archivo.txt:', err)
    })

  console.log('--> Hacer cosas mientras lee el archivo...')

  console.log('Leyendo el segundo archivo...')
  readTextFile('archivo2.txt')
    .then(text => {
      console.log('segundo texto:', text)
    })
    .catch(err => {
      console.error('Error leyendo archivo2.txt:', err)
    })
}

import fs from 'node:fs'
import path from 'node:path'

const __dirname = new URL('.', import.meta.url).pathname

console.log('Leyendo el primer archivo')
const text = fs.readFileSync(path.join(__dirname, '..', 'archivo.txt'), 'utf-8')
console.log('primer texto:', text)

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync(
  path.join(__dirname, '..', 'archivo2.txt'),
  'utf-8',
)
console.log('segundo texto:', secondText)

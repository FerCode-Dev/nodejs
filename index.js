import {sum} from './cjs/index.js'
import {getFileStats} from './system/fs-stats.js'
import {getOsInfo} from './system/info.js'
import {readFile} from './system/fs-readFile.js'
import {readTextFile} from './system/fs-readFile-promises.js'

console.log(sum(2, 3))
console.log(sum(8, 3))

//callbacks
console.log('Leyendo el primer archivo...')
readFile('archivo.txt', (err, text) => {
  if (err) {
    console.error('Error leyendo archivo.txt:', err)
    return
  }
  console.log('primer texto:', text)
})

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
readFile('archivo2.txt', (err, text) => {
  if (err) {
    console.error('Error leyendo archivo2.txt:', err)
    return
  }
  console.log('segundo texto:', text)
})

console.log('Node running 🚀')

console.log('Node running 🚀')

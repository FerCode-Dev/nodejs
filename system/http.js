// crear un servidor
import http from 'node:http'
import {findAvailablePort} from './free-port.js'

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

// ⬅️ SOLO un listen
findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`)
  })
})

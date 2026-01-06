import http from 'node:http'
import fs from 'node:fs'

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h1>Mi página</h1>')
  } else if (req.url === '/imagen-super-bonita.png') {
    fs.readFile('./image.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
}

// 👇 ESTA LÍNEA ES LA QUE TE FALTA
const server = http.createServer(processRequest)

// 👇 ahora sí existe `server`
server.listen(desiredPort, () => {
  console.log(`server listening on http://localhost:${desiredPort}`)
})

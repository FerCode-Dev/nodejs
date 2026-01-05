// crear un servidor
import http from 'node:http'

const desiredPort = process.env.PORT ?? 1234
//calback funciones que se ejecutan despues que termine algo
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 //es ok
    res.setHeader('Content-T', 'text/plain', 'charset=utf-8')
    res.end('Bienvenido a mi pagina de inicio')
  } else if (req.url === '/imagen/png') {
  } else if (req.url === '/contacto') {
    res.statusCode = 200 //es ok
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 400 //es ok
    res.end('<h1>404</h1>')
  }
})

// ⬅️ SOLO un listen
server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})

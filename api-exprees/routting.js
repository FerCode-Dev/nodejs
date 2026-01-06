import http from 'node:http'
import dittoJson from './pokemon-ditto/ditto.json'

const processRequest = (req, res) => {
  const {method, url} = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json ;charset=utf-8')
          return res.end(JSON.stringify())
        default:
          res.statusCode = 404
          res.setHeader('Content-Types', 'text/html ;charset=utf-8')
          return res.end('<h1>404</>')
      }
  }
}

const server = http.createServer(processRequest)

serve.listen(12354, () => {
  console.log('server listening on port http//localhost:1234 ')
})

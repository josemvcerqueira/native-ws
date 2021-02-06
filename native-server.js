const http = require('http')
const websocket = require('ws')

// Create a HTTP Server
const server = http.createServer((req, res) => {
  res.end('I am connected')
})

// Listen to the traffic coming to HTTP Server
const webSocketServer = new websocket.Server({ server })

// Listen to the event headers to perform an action on the initial handshake
webSocketServer.on('headers', (headers, req) => {
  console.log(headers)
})

// Listen to anyone who connects to the protocol ws on port 8080
webSocketServer.on('connection', (socket, req) => {

  // Send to whoever is connected a message
  socket.send('Welcome to the websocket server!!')

  // Receive a message from the person connected
  socket.on('message', msg => {
    console.log(msg)
  })
})

server.listen(8080)

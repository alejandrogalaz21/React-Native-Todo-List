import { Server } from 'socket.io'
const io = new Server({
  cors: {
    origin: '*'
  }
})

// creamos un namespace para nuestro socket, si quisieramos añadir sockets en el admin debemos agregrar otro namespace
// el namespace debe coinicdir con nuestro reverse proxy
export const socketNamespace = io.of('/socket.io')
socketNamespace.use((socket, next) => {
  next()
})
const socketConnections = []

io.on('connection', socket => {
  socketConnections.push(socket.id)
  socket.emit('newNotificationSocket', 'nuevas notificaciones')
  console.log(socket.id)
  console.log('SOCKET CONNECTED')
  socket.on('disconnect', function () {
    socketConnections.splice(socketConnections.indexOf(socket.id), 1)
  })
  socket.on('logout', function () {
    socketConnections.splice(socketConnections.indexOf(socket.id), 1)
  })
})

export default io

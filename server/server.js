const app = require ('./app');
const http = require ('http');

const config = require('./configs/default');

const port = config.port;

const server = http.createServer(app);



// Socket 

const io = require('socket.io')(server)
// const io = require("socket.io")(http, {
//     cors: {
//       origin: "http://localhost:3333",
//       methods: ["GET", "POST"]
//     }
//   });

io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
});





server.listen(port);

console.log(`Server is running on:127.0.0.1:`+ port);

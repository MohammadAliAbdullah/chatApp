const express = require("express")
const app = express()
const cors = require("cors")
const server = require('http').Server(app);
const env = require('dotenv').config();
const PORT = process.env.PORT;
const NODE_PORT = process.env.NODE_PORT;
// connetion server with socket io.

const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});
// cors pass origin 
app.use(cors());
users = [];
// socket connection 
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on("newUser", data => {
    console.log(data)
    users.push(data)
    io.emit("newUserResponse", users)
  })

  // socket.on('join room', (room) => {
  //   socket.join(room);
  //   console.log(`Client joined room: ${room}`);
  // });
  // socket.on('new message', (room, message) => {
  //   console.log(`Received new message in room ${room}:`, message);
  //   io.to(room).emit('new message', message);
  // });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(NODE_PORT, () => {
  console.log(`Server listening on ${NODE_PORT}`);
});



//app.use(cors())
//let users = []
//
//io.on('connection', (socket) => {
//    console.log(`⚡: ${socket.id} user just connected!`)  
//    socket.on("message", data => {
//      socketIO.emit("messageResponse", data)
//    })
//
//    socket.on("typing", data => (
//      socket.broadcast.emit("typingResponse", data)
//    ))
//
//    socket.on("newUser", data => {
//      users.push(data)
//      socketIO.emit("newUserResponse", users)
//    })
// 
//    socket.on('disconnect', () => {
//      console.log('🔥: A user disconnected');
//      users = users.filter(user => user.socketID !== socket.id)
//      socketIO.emit("newUserResponse", users)
//      socket.disconnect()
//    });
//});
//
//app.get("/api", (req, res) => {
//  res.json({message: "Hello"})
//});
//
//   
//http.listen(PORT, () => {
//    console.log(`Server listening on ${PORT}`);
//});
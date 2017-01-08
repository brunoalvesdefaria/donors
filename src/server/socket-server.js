// Servidor: app.js
// Iniciando servidor HTTP
var app = require('http').createServer();
var io = require('socket.io').listen(app)

app.listen(5000, function() {
  console.log("Running...");
});

// Evento connection ocorre quando entra um novo usuário.
io.on('connection', function(socket) {
  console.log('User Connected!');
  // Update a new user on broadcast
  socket.on('new user', function(msg){
    console.log('New User: ' + msg);
    socket.broadcast.emit('new user', msg);
  });
});
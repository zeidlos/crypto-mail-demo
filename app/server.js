var io = require('socket.io')(4223);
io.on('connection', function(socket) {
  socket.on('message', function(data) {
    console.log(data);
    socket.broadcast.emit('message', data);
  });
});

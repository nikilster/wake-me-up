// State and server initialization
var state_manager = require('./state.js');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
server.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

// Handler for initial request, all other requests are through sockets
app.get('/:user', function(req, res) {
    res.sendfile('index.html');
});

// Socket handlers
io.on('connection', function(socket){
    var user;

    // Add new user when user opens page
    socket.on('user signed on', function(msg) {
      user = msg;
      console.log(user + ' signed on');
      state_manager.add_user(user);

      io.emit('update state', state_manager.user_states);
    });

    // Delete user when user closes page
    socket.on('disconnect', function() {
      state_manager.remove_user(user);
      console.log(user + ' signed off');

      io.emit('update state', state_manager.user_states);
    });

    // Update user with new state
    socket.on('update user', function(msg) {
      console.log(user + " updated with " + msg);
      var updated_fields = JSON.parse(msg)
      state_manager.update_user_fields(user, updated_fields);
          
      io.emit('update state', state_manager.user_states);
    })
});

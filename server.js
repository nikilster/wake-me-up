// State and server initialization

var user_states = init_user_states();

var app = require('express')();
var server = require('http').Server(app);
server.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

var io = require('socket.io').listen(server);

// Handler for url
app.get('/:user', function(req, res) {
    // console.log(req.param('user'))
    // user = req.param('user')
    // add_user(user)
    // res.send(user_states);
    res.sendfile('index.html');
});

// Socket communication
io.on('connection', function(socket){
    var user;

    socket.on('user signed on', function(msg) {
      user = msg;
      console.log(user + ' signed on');
      add_user(user);

      io.emit('update state', user_states);
    });

    socket.on('disconnect', function() {
      remove_user(user);
      console.log(user + ' signed off');

      io.emit('update state', user_states);
    });
});


// State-related methods

function init_user_states() {
    return {
        "dtran": get_default_user_state("dtran"),
    }
}

function add_user(user) {
    // Initialize users array if necessary
    if (user_states == null) {
        user_states = {};
    }

    // Add user if necessary
    if (user_states[user] == null) {
        user_states[user] = get_default_user_state(user);
    }
}

function remove_user(user) {
    delete user_states[user];
}

function get_default_user_state(user) {
    return {
        "name": user,
        "alarm_ts": Date.now()-600000,
        "awake": false,
        "awake_ts": null,
        "video": "https://www.youtube.com/watch?v=fWNaR-rxAic",
        "video_start_ts": Date.now()-120000 
    }
}
var express = require('express');
var app = express();

// Object to save user state
var user_states = {
	"dtran": get_default_user_state("dtran"),
}

app.get('/:user', function(req, res) {
	console.log(req.param('user'))
	user = req.param('user')
	handle_initial_user_request(user)
	res.send(user_states);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

function handle_initial_user_request(user) {
	// Initialize users array if necessary
	if (user_states == null) {
		user_states = {};
	}

	// Add user if necessary
	if (user_states[user] == null) {
		user_states[user] = get_default_user_state(user);
	}
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
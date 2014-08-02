// Global object to save user state
user_states = init_user_states();
init_server();

function init_user_states() {
	return {
		"dtran": get_default_user_state("dtran"),
	}
}

function init_server() {
	var express = require('express');
	var app = express();

	app.get('/:user', function(req, res) {
		console.log(req.param('user'))
		user = req.param('user')
		add_user(user)
		res.send(user_states);
	});

	var server = app.listen(3000, function() {
	    console.log('Listening on port %d', server.address().port);
	});
}

// State-related methods

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
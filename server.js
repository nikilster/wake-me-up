var express = require('express');
var app = express();

// Object to save user state
var user_state = {
	"users": [
		{
			"user": "dtran",
			"alarm_ts": Date.now()-600000,
			"awake": false,
			"awake_ts": null,
			"video": "https://www.youtube.com/watch?v=fWNaR-rxAic",
			"video_start_ts": Date.now()-120000
		}
	]
}

app.get('/', function(req, res){
  res.send(user_state);
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
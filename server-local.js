const app = require('./lambda/server');

const port = 4000;

app.listen(port, function () {
	// Callback function
	console.log("Running server at " + port);
});

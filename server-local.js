const db = require('diskdb');
db.connect('./data', ['condos', 'logs']);

const scrape = require('./scrape');

const app = require('./lambda/server');

const port = 4000;

// RUN SCRAPER once a day
// TODO: maybe put this in a config, .env file instead of db
const timestamp = Date.now();
const date_now = Math.floor(timestamp / (1000 * 60 * 60 * 24));

const date_last_run = db.logs.find({
	date_last_run: date_now
});
if (!date_last_run.length) {
	scrape();
}

app.get("/api/items", (req, res) => {
	res.json(db.condos.find());
})


app.listen(port, function () {
	// Callback function
	console.log("Running server at " + port);
});

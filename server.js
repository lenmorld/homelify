// import express and init server using express()
const express = require("express");
const serverless = require('serverless-http');
const server = express();
const router = express.Router();
const db = require('diskdb');
db.connect('./data', ['condos', 'logs']);

const scrape = require('./scrape');

const port = 4000;

server.use(express.static("public"));

server.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

server.get("/api/items", (req, res) => {
	res.json(db.condos.find());
})

// all backend routes go here under /api
server.get("/api/json", function (req, res) {
	res.json({ name: "Lenny" });
});

server.listen(port, function () {
	// Callback function
	console.log("Running server at " + port);
});

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


// Netlify Lambda
router.get("/", (req, res) => {
	res.json("Hello Netlify Lambda");
})

router.get("/api/items", (req, res) => {
	res.json(db.condos.find());
})

server.use('/.netlify/functions/server', router);

module.exports.handler = serverless(server);
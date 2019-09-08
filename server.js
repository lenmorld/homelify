// import express and init server using express()
const express = require("express");
const server = express();
const db = require('diskdb');
db.connect('./data', ['condos']);

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
scrape();

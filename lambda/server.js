// import express and init server using express()
const express = require("express");
const serverless = require('serverless-http');
const server = express();
const router = express.Router();

// const port = 4000;

// server.use(express.static("public"));

// server.get("/", function (req, res) {
// 	res.sendFile(__dirname + "/index.html");
// });

// all backend routes go here under /api
// server.get("/api/json", function (req, res) {
// 	res.json({ name: "Lenny" });
// });

// server.listen(port, function () {
// 	// Callback function
// 	console.log("Running server at " + port);
// });


// Netlify Lambda
router.get("/", (req, res) => {
	res.json("Hello Netlify Lambda");
})

// TODO: GET FROM DB, since LAMBDA doesnt have disk access for diskdb
// router.get("/api/items", (req, res) => {
// 	res.json(db.condos.find());
// })

server.use('/.netlify/functions/server', router);

module.exports = server;
module.exports.handler = serverless(server);
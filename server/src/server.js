const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const app = express();

const jobsController = require("./controllers/jobs.controller");

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/jobs", jobsController);

const port = process.env.PORT || "2345";

const start = async () => {
	await connect();
	app.listen(port, () => {
		console.log("Hurray! listening to port no", port);
	});
};

module.exports = start;

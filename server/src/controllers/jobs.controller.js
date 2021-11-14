const express = require("express");
const Jobs = require("../models/jobs.model");

const router = express.Router();

// api to get all jobs
router.get("/", async (req, res) => {
	const { location, title } = req.query;
	try {
		if (location && title) {
			const jobs = await Jobs.find({ location, title }).lean().exec();
			return res.status(200).json({ jobs });
		} else if (location) {
			const jobs = await Jobs.find({ location }).lean().exec();
			return res.status(200).json({ jobs });
		} else if (title) {
			const jobs = await Jobs.find({ title }).lean().exec();
			return res.status(200).json({ jobs });
		}
		const jobs = await Jobs.find().lean().exec();
		return res.status(200).json({ jobs });
	} catch (e) {
		console.log(e);
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});

// api to get jobs by id
router.get("/:id", async (req, res) => {
	try {
		let job = await Jobs.findOne(req.body.id).lean().exec();
		return res.status(200).json({ job });
	} catch (e) {
		console.log(e);
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});

// api to post
router.post("/", async (req, res) => {
	try {
		const job = await Jobs.create(req.body);
		return res.status(201).json({ job });
	} catch (e) {
		console.log(e);
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});

module.exports = router;

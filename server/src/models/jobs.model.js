const mongoose = require("mongoose");

let jobSchema = new mongoose.Schema(
	{
		description: { type: String, required: true },
		title: { type: String, required: true },
		image: { type: String, required: true },
		type: { type: String, required: true },
		publication_date: { type: String, required: true },
		id: { type: Number, required: true },
		location: { type: String, required: true },
		level: { type: String, required: true },
		tags: [{ type: String, required: true }],
		company: {
			id: { type: String, required: true },
			short_name: { type: String, required: true },
			name: { type: String, required: true },
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model("Jobs", jobSchema);
/*
{
      "description": "Experience in Cloud Computing technologies, scripting languages (JSON, Python, RoR, etc), integrating 3rd party monitoring tools, encryption tools, and forensics. Implementation experience with enterprise security solutions such as WAF, IPS, Anti-DDOS, and SIEM.",
      "title": "Principal Security Consultant",
      "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80"
      "type": "external",
      "publication_date": "2021-08-04T00:04:04Z",
      "id": 5690411,
      "location": "Berlin, Germany",
      "level": "senior",
      "tags": [],
      "company": {
        "id": 12090,
        "short_name": "amazon",
        "name": "Amazon"
      }
}

*/

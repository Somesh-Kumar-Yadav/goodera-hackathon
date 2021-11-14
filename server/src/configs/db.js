const mongoose = require("mongoose");

const connect = () => {
	return mongoose.connect(
		"mongodb+srv://Somesh:Somesh@123@cluster0.nf1xe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
		{
			useCreateIndex: true,
			useFindAndModify: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);
};

module.exports = connect;

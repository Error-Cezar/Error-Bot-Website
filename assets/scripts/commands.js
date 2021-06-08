async function setrun() {
    const mongoose = require("mongoose");
require('dotenv').config();

		  mongoose.connect(process.env.MONGODB_SRV, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		})	

		const docs = await Tank.find();
  const changes = docs[0].num
  document.getElementById("run").innerHTML = "commands runned: " + changes;
    }
const mongoose = require("mongoose");
const TankSchema = new mongoose.Schema({
    num: Number
});

module.exports = mongoose.model("Tank", TankSchema)
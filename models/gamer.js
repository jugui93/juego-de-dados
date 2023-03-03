const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamerSchema = new Schema({
    name: {type: String}
});

module.exports = mongoose.model("Gamer", gamerSchema);
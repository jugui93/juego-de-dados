const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gamer = require('./gamer');

const gameSchema = new Schema({
    id: {type: String },
    type: {type: String},
    gamers: [{type: mongoose.ObjectId,
    ref: 'gamer'}],
    inProgress:{ type: Boolean,
        default: false
    },
    winner: {type: mongoose.ObjectId,
        ref: 'gamer'}
});

module.exports = mongoose.model('Game', gameSchema);
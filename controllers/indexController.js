const Gamer = require('../models/gamer');
const Game = require('../models/game');
const indexController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express' });
    },
    create: function(req, res, next) {
        res.render('create', {});
    },
    save: async function (req, res) {
        let player1 = new Gamer({name: req.body.player1});
        let player2 = new Gamer({name: req.body.player2});
        let player3 = new Gamer({name: req.body.player3});

        let game = new Game({
            id: req.body.idgame,
            type:req.body.type,
            gamers:[player1, player2, player3]
        })

        try {
            await player1.save();
            await player2.save();
            await player3.save();
            await game.save();
            res.status(200).jsonp(game);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = indexController
var express = require('express');
var router = express.Router();
const indexController = require ('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);
/*GET registro juego*/
router.get('/createGame', indexController.create);
/*POST registro juego*/
router.post('/createGame', indexController.save)

module.exports = router;

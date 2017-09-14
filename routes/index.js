var express = require('express');
var router = express.Router();

//module.exports = router;
module.exports = function(app) {
	/* GET 404 page. */
	app.get('/404', function(req, res) {
		res.render('error', {});
		res.sendStatus(404)
	});

	/* GET home page. */
	app.get('/', function(req, res, next) {
		res.render('index', {
			title: 'Express Study'
		});
	});

}
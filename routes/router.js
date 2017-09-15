/**
 * 
 * @authors 冰剑
 * @date    2017-09-15 14:09:20
 * @Desc   所有的页面路由
 */
var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express Study Home'
	});
});

/* GET User page. */
router.get('/user', function(req, res, next) {
	res.render('index', {
		title: 'Express Study User'
	});
});


module.exports = router;
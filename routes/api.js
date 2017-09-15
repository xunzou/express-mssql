/**
 * 
 * @authors 冰剑
 * @date    2017-09-15 13.39:20
 * @Desc   所有的api路由
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(function(req, res, next) {
	console.log('11api')
	next()
});
// 定义网站主页的路由
router.get('/', function(req, res, next) {
	res.cookie('rememberme', '1', {expires: new Date(Date.now() + 900000),httpOnly: true});
	res.send('api home page');
});
router.get('/user', function(req, res, next) {
	//res.end();
	//res.status(200).end();
	res.type('json');
	res.status(200).json({
		user: 'tobi'
	}).end();
});
router.get('/name', function(req, res, next) {
	res.redirect('/admin');
});

module.exports = router;
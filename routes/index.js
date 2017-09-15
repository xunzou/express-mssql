// var express = require('express');
// var router = express.Router();
/**
 * 
 * @authors 冰剑
 * @date    2017-09-15 11:44:06
 * @Desc   网站页面路由
 */
//所有api路由
var api = require('./api')
var routers = require('./router')
//module.exports = router;
module.exports = function(app) {
	//所有的api路由
	app.use('/api', api);
	//所有的页面路由
	app.use('/', routers);
	
	//404
	app.get('*', function(req, res, next) {
		res.render('index', {
			title: 'Express+404'+ req.url
		});
	});

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	// error handler
	app.use(function(err, req, res, next) {
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};
		// render the error page
		res.status(err.status || 500);
		res.render('error', {
			message: '404'
		});
	});

}
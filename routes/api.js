/**
 * 
 * @authors 冰剑
 * @date    2017-09-15 13.39:20
 * @Desc   所有的api路由
 */
var express = require('express');
var router = express.Router();

//var mssql = require("mssql");
var sql = require("../db/mssql");
//var config = require('../db/config')

/* api */
router.use(function(req, res, next) {
	next()
});
// 定义api主页的路由
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


router.get('/t2',function(req, res, next){

	sql('select top 10 *  from JW_Account',function(data){
        var sc = 200
        if (data.error) {
            sc = 400
        };
		res.type('json');
		res.status(sc).json(data).end();
	})
	/*var pool1 = new mssql.ConnectionPool(config, function(err){
            console.dir(err)
        res.status(400).json({type:1,err:err}).end();
        // ... error checks

        // Query

        pool1.request() // or: new mssql.Request(pool1)
        .query(sql, (err, result) => {
            // ... error checks
            if (err) {
    	        res.status(400).json({type:2,err:err}).end();
    	        return
            };
            console.dir(err)
	        res.status(400).json(result).end();

            console.dir(result)
            //callback(result)
        })

    })

    pool1.on('error', function(err){

        // ... error handler
    })*/
})


router.get('/name', function(req, res, next) {
	res.redirect('/admin');
});

module.exports = router;
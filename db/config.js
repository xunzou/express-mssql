/**
 * 
 * @authors 冰剑
 * @date    2017-09-17 10:35:44
 * @Desc   mssql 数据库连接
 */

var config = {
	user: 'sa',
	password: '123456',
	server: 'localhost',
	database: 'main',
	port: 1433,
	options: {
		encrypt: true // Use this if you're on Windows Azure
	},
	pool: {
		min: 0,
		max: 10,
		idleTimeoutMillis: 3000
	}
};
module.exports = config;
/**
 * 
 * @authors 冰剑
 * @date    2017-09-17 10:35:44
 * @Desc   mssql 错误处理
 */
var errObj = {
	ConnectionError:'与连接和连接池相关的错误。',
	TransactionError:'与创建、提交和回滚事务相关的错误',
	RequestError:'与查询和存储过程执行有关的错误',
	PreparedStatementError:'与准备语句相关的错误',
}

var error = err => {
	//console.log(JSON.stringify(err))
	if (err) {
		err.msg = errObj[err.name];
		//err.originalError = null
		//delete err.originalError
	};
	console.log(JSON.stringify(err))
}
module.exports = error;
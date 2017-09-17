/**
 * 
 * @authors 冰剑
 * @date    2017-09-15 19:03:01
 * @Desc   mssql 封装
 */
var mssql = require("mssql");
var config = require('./config')

var pool = new mssql.ConnectionPool(config)

var errInfo = require('./error')
//基础查询
var query = function(sql, callback) {
        var data = {
            error: null,
            result: null
        }
        pool.connect( err => {
            if (err) {
                errInfo(err)
                data.error = err;
                errInfo(data.error)
                callback(data)
                return
            };
            pool.request() // or: new sql.Request(pool1)
                .query(sql, (err, result) => {
                    // ... error checks
                    if (err) {
                        data.error = err;
                        callback(data)
                        return
                    };
                    data.result = result;
                    callback(data)
                })



        })

    }

    //流查询  用于大数据 
var queryStream = function(sql, callback) {
    var data = {
        error: null,
        result: null
    }
    var ps = new mssql.PreparedStatement()
    ps.input('param', mssql.Int)
    ps.prepare('select @param as value', err => {
        // ... error checks
        if (err) {
            data.error = err;
            callback(data)
            return
        };

        ps.stream = true
        var request = ps.execute({
            param: 12345
        })

        request.on('recordset', columns => {
            // Emitted once for each recordset in a query
        })

        request.on('row', row => {
            // Emitted for each row in a recordset
        })

        request.on('error', err => {
            // May be emitted multiple times
        })

        request.on('done', result => {
            // Always emitted as the last one
            console.log(result.rowsAffected) // Returns number of affected rows in case of INSERT, UPDATE or DELETE statement.
            ps.unprepare(err => {
                // ... error checks
            })
        })
    })
}

/*
const pool2 = new sql.Connection(config, err => {
    // ... error checks

    // Stored Procedure

    pool2.request() // or: new sql.Request(pool2)
    .input('input_parameter', sql.Int, 10)
    .output('output_parameter', sql.VarChar(50))
    .execute('procedure_name', (err, result) => {
        // ... error checks

        console.dir(result)
    })
})

pool1.on('error', err => {
    // ... error handler
})*/


module.exports = query
var connection = require('../module/connection.js');
exports.checkAvailable = (data, callback) => {
    var sql = "select * from `taskperform` where ?";
    connection.query(sql, [data], function(err, result) {
        if (err) {
         callback(err);
     }
     else {
        callback(null,result)
        }
    })
}
exports.addQuery = (data, callback) => {
    var sql = "INSERT INTO `taskperform` set ?";
    connection.query(sql, [data], function(err, result) {
        if (err) {
            callback(err);
        }
         else {
            callback(null,result)
        }
    })
}
exports.updateQuery = (data, condition, callback) => {
    var sql = "UPDATE taskperform SET ? where ?";
    connection.query(sql, [data, condition], (err, result) => {
        if (err) {
            callback(err);
        } 
        else {
            callback(null,result)
        }
    })
}
exports.deleteQuery = (data, callback) => {
    var sql = "DELETE FROM taskperform WHERE ?";
    connection.query(sql, [data], (err, result) => {
        if(err)
        {
            callback(err)
        }
        else
            callback(null,result)
    });

};
exports.view = (callback) => {
    var sql = "SELECT * from taskperform";
    connection.query(sql, (err, result) => {
        if(err) {
            callback(err)
        } else {
            callback(null,result)
        }
        
    })
}

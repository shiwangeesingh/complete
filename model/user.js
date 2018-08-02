var connection = require('../module/connection.js');
exports.checkAvailable = (data, callback) => {
    var sql = "select * from `taskperform` where ?";
    connection.query(sql, [data], function(err, result) {
        if (err) {
            callback(1);
        } else {
            result.length > 0 ? callback(result) : callback(2)
        }
    })
}
exports.addQuery = (data, callback) => {
    var sql = "INSERT INTO `taskperform` set ?";
    connection.query(sql, [data], function(err, result) {
        if (err) {
            callback(1);
        } else {
            result.length > 0 ? callback(result) : callback(2)
        }
    })
}
exports.updateQuery = (data, condition, callback) => {
    var sql = "UPDATE taskperform SET ? where ?";
    connection.query(sql, [data, condition], (err, result) => {
        if (err) {
            callback(1);
        } else {
            result.length > 0 ? callback(result) : callback(2)
        }
    })
}

exports.deleteQuery = (data, callback) => {
    var sql = "DELETE FROM taskperform WHERE ?";
    connection.query(sql, [data], (err, result) => {
        err ? callback(0) : callback(1);
    });

};

exports.view = (callback) => {
    var sql = "SELECT * from taskperform";
    connection.query(sql, (err, result) => {
        if (err)
            callback(1);
        else
            callback(result);
    })
}

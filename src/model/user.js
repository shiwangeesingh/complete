var connection= require ('../modules/connection.js');
exports.checkAvailable = (values) => {
	return new Promise((resolve, reject) => {
		var sql = "select * from `taskperform` where ?";
		connection.query(sql,[values], function(err, result){
			if(err) {
				reject(err);
			} else {
				resolve(result);
			}
		})
	})
}
exports.addQuery = (values) => {
return new Promise((resolve, reject) => {
	var sql = "INSERT INTO `taskperform`  (`name`, `mobile`) VALUES (?,?)";
    var values = [name, mobile];
    connection.query(sql, [values], (err, result) => {
			err ? reject(err) : resolve(result);
		});
	});
};
exports.updateQuery = (values, condition) => {
return new Promise((resolve, reject) => {
	 var sql = "UPDATE taskperform SET ? where ?";
    connection.query(sql, [values, condition], (err, result) => {
			err ? reject(err) : resolve(result);
		});
	});
};

exports.deleteData = (values) => {
return new Promise((resolve, reject) => {
var sql = "DELETE FROM taskperform WHERE id = ?";
connection.query(sql, [id], (err, result) => {
			err ? reject(err) : resolve(result);
		});
	});
};



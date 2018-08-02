var configs = require('./config');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : configs.hostName,
  user     : configs.user,
  password : configs.password,
  database : configs.dbName
});
connection.connect(function(err){
	if(err){
		var error={
			status: 0,
			message : "error in execution"
		}
		 res.send(error)
	}else{
		console.log("database is working");
	}
});
module.exports=connection;
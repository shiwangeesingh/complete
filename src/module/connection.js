var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'task1'
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
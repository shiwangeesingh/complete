var express = require("express");
var path = require("path");
var mysql = require("mysql");
var app = express();
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'task1'
});
app.use(bodyParser.urlencoded({
extended: true
}));
 app.use(bodyParser.json());
 app.use(express.static(path.join(__dirname, "viw")));
connection.connect();
app.post('/add', function(req , res) {
	console.log("add api calling")
	// var name = req.body.name;
	// var mobile = req.body.mobile;
	var {name, mobile} = req.body;
	console.log(req.body);
	var sql = "INSERT INTO `taskperform`  (`name`, `mobile`) VALUES (?,?)";
	var values = [name, mobile];
	connection.query(sql, values, function(err,result){
		if (err) {
			console.log(err);
		} else {
			res.send(req.body)
			console.log(result);
		}
})
});


app.post('/update', function(req, res) {	
// var name = req.body.name;
// var mobile = req.body.mobile;
// var id = req.body.id;

var { name, mobile, id} = req.body;
var sql = "UPDATE taskperform SET mobile = ?, name = ? WHERE id= ?";
var values = [mobile,name,id];
//console.log(values);
connection.query(sql, values, function(err,result){
	if (err) {
			console.log(err);
		}
			else {
			var sql = "select * from `taskperform` WHERE id = ?"
			connection.query(sql, [id], (err, result) => {
				if(err) {
					console.log(err);
				} else {
					res.send("success");
					console.log(result);
				}
			})
			// res.send(req.body);
			// console.log(result);
		}
});
})


app.post('/delete', function(req, res) {
	var id = req.body.id;
	var sql = "DELETE FROM taskperform WHERE id = ?";
	connection.query(sql, [id], function(err,result){
		if (err) {
			console.log(err);}
			else {
				res.send("successfully deleted")
			console.log(result);
		}
	});
})


app.post('/select', function(req, res) {
	var name = req.body.name;
	var mobile = req.body.mobile;
	var id = req.body.id;
	var sql = "SELECT * FROM taskperform WHERE id=?";
	var values = [id];
	connection.query(sql, values, function(err,result){
		if (err) {
			console.log(err);}
			else {
			console.log(result);
			res.send(result);
		}
	});
})


app.post('/viewUser', function(req, res) {
	console.log("viewUser")
     //var userid = req.body.userid;
     var sql = "SELECT * from `taskperform`";
     var values = [];
     connection.query(sql,function(err, result){
         console.log(err);
             if (err) {
                console.log(err);
                  } else {
                  	console.log({result})
            res.send(result);
                        }
                 });
                });

app.listen(3000, function (err, res) {
	if(err) {
		console.log("unable to start server")
	}	// body...
	else {
		console.log("server is running");
	}
})
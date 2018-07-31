var express = require("express");
var path = require("path");
var mysql = require("mysql");
var app = express();
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task1'
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "viw")));
connection.connect();


app.post('/add', function(req, res) {
    var {
        name,
        mobile
    } = req.body;
    var sql = "INSERT INTO `taskperform`  (`name`, `mobile`) VALUES (?,?)";
    var values = [name, mobile];
    connection.query(sql, values, function(err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(req.body)
        }
    })
});


app.post('/update', function(req, res) {
    var {
        name,
        mobile,
        id
    } = req.body;
    var sql = "UPDATE taskperform SET mobile = ?, name = ? WHERE id= ?";
    var values = [mobile, name, id];
    connection.query(sql, values, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            var sql = "select * from `taskperform` WHERE id = ?"
            connection.query(sql, [id], (err, result) => {
                if (err) {
                    res.send(err)
                } else {
                    res.send("success");
                }
            })
        }
    });
})


app.post('/delete', function(req, res) {
    var id = req.body.id;
    var sql = "DELETE FROM taskperform WHERE id = ?";
    connection.query(sql, [id], function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send("successfully deleted")
        }
    });
})


app.post('/select', function(req, res) {
    var name = req.body.name;
    var mobile = req.body.mobile;
    var id = req.body.id;
    var sql = "SELECT * FROM taskperform WHERE id=?";
    var values = [id];
    connection.query(sql, values, function(err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result);
        }
    });
})


app.post('/viewUser', function(req, res) {
    var sql = "SELECT * from `taskperform`";
    var values = [];
    connection.query(sql, function(err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result);
        }
    });
});

app.listen(3000, function(err, res) {
    if (err) {
        res.send(err)
    } // body...
    else {
        console.log("server is running");
    }
})
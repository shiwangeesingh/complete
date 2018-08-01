var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require ('body-parser');
const port = process.env.PORT || 3000;
var glob = require ('glob');
var path = require('path');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let initRoutes = () => {
	glob("./Routes/*.js", {cwd: path.resolve("./src")}, (err, routes) => {
		if (err) {
			console.log("Error occured including routes");
			return;
		}
		routes.forEach((routePath) => {
			require(routePath).getRouter(app); // eslint-disable-line
		});
		console.log("included " + routes.length + " route files");
	});
}

app.listen(port, () => {
	console.log("Server is running on port "+port);
});
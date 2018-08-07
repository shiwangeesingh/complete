var user = require('../controller/user');
var path=require("path");
exports.default = function(app) {
app.route('/user/add').post(user.add);
app.route('/user/update').post(user.update);
 app.route('/user/delete').post(user.delete);
 app.route('/user/viewUser').get(user.viewUser);
return(app)
}
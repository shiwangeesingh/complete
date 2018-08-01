var user = require('../controllers/user');
var path=require("path");
exports.default = function(app) {
app.route('/user/add').post(user.add);
app.route('/user/update').post(user.updateQuerry);
app.route('/user/delete').post(user.deleteQuerry);
return(app)
}
var UserModel = require('../model/user');
exports.add = function(req, res) {
    var {
        mobile,
        name
    } = req.body;
    UserModel.checkAvailable(mobile, function(result) {
        if (result == 1)
            res.send("err");
        else if (result == 0)
            res.send("number already registered");

        else {
            var data = {
                mobile,
                name
            };
            UserModel.addQuery(data, function(result) {
                if (result == 1) {
                    res.send("error in execution");
                } else {
                    res.send("data inserted");
                }

            })
        }
    })
}

exports.update = function(req, res) {
    var {
        id,
        mobile,
        name
    } = req.body;
    UserModel.checkAvailable({
        id
    }, function(result) {
        if (result == 1)
            res.send("err");
        else if (result.length = 0)
            res.send("id does not exist");
        else {
            var data = {
                name,
                mobile
            };
            UserModel.updateQuery(data, {
                id
            }, function(result) {
                if (result == 1) {
                    res.send("execution error");
                } else {
                    res.send("success");
                }

            })
        }
    })
}

exports.delete = function(req, res) {
    var {
        id
    } = req.body;
    UserModel.checkAvailable({
        id
    }, function(result) {
        if (result == 1)
            res.send("err");
        else if (result.length = 0)
            res.send("id does not exist");
        else {
            UserModel.deleteQuery({
                id
            }, function(result) {
                if (result == 0) {
                    res.send("execution error");
                } else {
                    res.send("success");
                }

            })
        }
    })
}

exports.viewUser = function(req, res) {
    UserModel.view(function(result) {
        if (result == 1) {
            res.send("execution error");
        } else {
            res.send(result);
        }
    })
}
var UserModel = require('../model/user');
exports.add = function(req, res) {
    var {
        mobile,
        name
    } = req.body;
    UserModel.checkAvailable(mobile, function(result) {
        if (result == 1)
            res.send("err");
        else if (result == 0)
            res.send("number already registered");

        else {
            var data = {
                mobile,
                name
            };
            UserModel.addQuery(data, function(result) {
                if (result == 1) {
                    res.send("error in execution");
                } else {
                    res.send("data inserted");
                }

            })
        }
    })
}

exports.update = function(req, res) {
    var {
        id,
        mobile,
        name
    } = req.body;
    UserModel.checkAvailable({
        id
    }, function(result) {
        if (result == 1)
            res.send("err");
        else if (result.length = 0)
            res.send("id does not exist");
        else {
            var data = {
                name,
                mobile
            };
            UserModel.updateQuery(data, {
                id
            }, function(result) {
                if (result == 1) {
                    res.send("execution error");
                } else {
                    res.send("success");
                }

            })
        }
    })
}

exports.delete = function(req, res) {
    var {
        id
    } = req.body;
    UserModel.checkAvailable({
        id
    }, function(result) {
        if (result == 1)
            res.send("err");
        else if (result.length = 0)
            res.send("id does not exist");
        else {
            UserModel.deleteQuery({
                id
            }, function(result) {
                if (result == 0) {
                    res.send("execution error");
                } else {
                    res.send("success");
                }

            })
        }
    })
}

exports.viewUser = function(req, res) {
    UserModel.view(function(result) {
        if (result == 1) {
            res.send("execution error");
        } else {
            res.send(result);
        }
    })
}
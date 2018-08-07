var userModel = require('../model/user');
var connection = require('../module/connection.js');
var commFunc = require('../module/commonFunction');
var responses = require('../module/responses');

exports.add = function(req, res) {
     var {name,mobile} = req.body;
    let data= commFunc.checkKeyExist({name,mobile})
    if(data.status == false || data=='undefined')
    { 
        responses.parameterMissing(res, data.data);
    }
    else
    {
      userModel.checkAvailable({mobile}, function(err, result) {
        if (err) {
            responses.sendError(res)
        }
         else {
            if (result.length > 0) {
            responses.numberAlreadyExist(res)  
            } else {
            var data = {mobile,name};
            userModel.addQuery(data, function(err,user) {
                if (err) {
            responses.sendError(res)
                    
                } else {
                    responses.success(res, user)
                }
            })
        }
    }
})
  }
}

exports.update = function(req, res) {
    var { id, mobile,  name} = req.body;
    let data= commFunc.checkKeyExist({name,mobile})
    if(data.status == false || data=='undefined')
    {  
        responses.invalidData(res)
    }
    else{
    userModel.checkAvailable({id}, function(err,checkAvaliblity) {
        if (err){
             responses.sendError(res)
                } else if(checkAvaliblity.length == 0) {
                        responses.idNotFound(res) 
                    }  
                    else{
                        userModel.checkAvailable({mobile}, function(err,checkAvaliblity) {
                            if (err)
                                responses.sendError(res)
                            else {
                                if (checkAvaliblity.length > 0) {
                                    responses.numberAlreadyExist(res) 
                                } 
                                else
                                {
                                    userModel.updateQuery({name,mobile}, {id}, function(err,updateUser) {
                                        if (err) {
                                            responses.sendError(res)
                                    }
                                    else{
                                        responses.success(res, updateUser)
                                    } 
                                }) 
                        }
                    }
                })
            }
        
    })
}
}

exports.delete = function(req, res) {
    var {id} = req.body;
    userModel.checkAvailable({id}, function(err, checkAvaliblity) {
        if (err) {
            responses.sendError(res)
        } 
        else {
            if (checkAvaliblity.length == 0) {
                responses.idNotFound(res)    
            }
                 else {
                    userModel.deleteQuery({id}, function(err,result) {
                        if (err) {
                            responses.sendError(res)
                        } 
                        else {
                            responses.success(res, result)
                        }
                    })
                }
            }
        })
}
exports.viewUser = function(req, res) {
    userModel.view(function(err,result) {
        if (err) {
            responses.sendError(res)
        } 
        else {
             responses.success(res, result)
        }
    })
}
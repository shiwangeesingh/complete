var userModel = require('../model/user');
var connection = require('../module/connection.js');
var commFunc = require('../module/commonFunction');
var responses = require('../module/responses');
exports.add = function(req, res) {
    var {mobile,name} = req.body;
    var manvalue = [name,mobile];
    var checkBlank = commFunc.checkBlank(manvalue);
    var validation = commFunc.validation(mobile);
    if(checkBlank == 1)
    {
        responses.parameterMissing(res)
    }
    else if(validation == false){
           responses.invalidData(res, "Invalid mobile");
    }
    else
    {
      userModel.checkAvailable({mobile}, function(err, result) {
        if (err) {
            responses.sendError(res)
        }
         else {
            if (result.length > 0) {
            responses.numberAlreadyExist(res, "Mobile number registered")  
            } else {
            var data = {mobile,name};
            userModel.addQuery(data, function(err,insert) {
                if (err) {
            responses.sendError(res)
                    
                } else {
                    responses.success(res, insert)
                }
            })
        }
    }
})
  }
}

exports.update = function(req, res) {
    var { id, mobile,  name} = req.body;
    var manvalue = [name,mobile];
    var validation = commFunc.validation(mobile);
    var checkBlank = commFunc.checkBlank(manvalue);
    userModel.checkAvailable({id}, function(err,checkAvaliblity) {
        if (err){
             responses.sendError(res)
                } else if(checkAvaliblity.length == 0) {
                        responses.idNotFound(res) 
                    }  
                    else if(checkBlank == 1)
                    {
                        responses.parameterMissing(res)
                    }
                    else if(validation == false){
                        responses.invalidData(res)
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
                                            responses.sendError()
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

exports.delete = function(req, res) {
    var {id} = req.body;
    userModel.checkAvailable({id}, function(err, checkAvaliblity) {
        if (err) {
            responses.sendError()
        } 
        else {
            if (checkAvaliblity.length == 0) {
                responses.idNotFound(res)    
            }
                 else {
                    userModel.deleteQuery({id}, function(err,result) {
                        if (err) {
                            responses.sendError()
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
            responses.sendError()
        } 
        else {
             responses.success(res, result)
        }
    })
}
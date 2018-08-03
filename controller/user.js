var userModel = require('../model/user');
var commFunc = require('../module/commonFunction');
exports.add = function(req, res) {
    var {mobile,name} = req.body;
      userModel.checkAvailable({mobile}, function(err, result) {
        if (err) {
            res.status(500).json({response:"error",message:err})
        } else {
            if (result.length > 0) {
            res.status(201).json({response:err,message:"Number already exist"})    
            } else {
            var data = {
                mobile,
                name
            };
            userModel.addQuery(data, function(err,insert) {
                if (err) {
                    res.status(500).json({response:err,message:err})
                } else {
                    res.status(201).json({response:"result",message:"data inserted successfully"})
                }

            })
        }
    }
    })
}

exports.update = function(req, res) {
    var { id, mobile,  name} = req.body;
    userModel.checkAvailable({id}, function(err,checkAvaliblity) {
        if (err){
             res.status(500).json({response:err,message:err})
                } else {
                    if (checkAvaliblity.length == 0) {
                        res.status(201).json({response:err,message:"Id doesnot exist"}) 
                    }  
            else{ 
                userModel.checkAvailable({mobile}, function(err,checkAvaliblity) {

                    if (err)
                        res.status(500).json({response:err,message:err})
                else {
                    if (checkAvaliblity.length > 0) {
                        res.status(201).json({response:err,message:"number already exist"}) 
                        } 
                    else
                        {
                            userModel.updateQuery({name,mobile}, {id}, function(err,updateUser) {
                                if (err) {
                                    res.status(500).json({response:err,message:err})
                                    }
                                else{
                                    res.status(201).json({response:updateUser,message:"data updated successfully"})
                                    } 
                                }) 
                        }
                    }
                })
            }
        }
    })
}

exports.delete = function(req, res) {
    var {id} = req.body;
    userModel.checkAvailable({id}, function(err, checkAvaliblity) {
        if (err) {
            console.log("err calling")
            res.status(500).json({response:"error",message:err})
        } 
        else {
            if (checkAvaliblity.length == 0) {
                console.log("result part calling")
                res.status(201).json({response:err,message:"Id doesnot exist"})    
            }
                 else {
                    userModel.deleteQuery({id}, function(err,result) {
                        if (err) {
                            res.status(500).json({response:err,message:err})
                        } 
                        else {
                            res.status(201).json({response:result,message:"data deleted successfully"})
                        }
                    })
                }
            }
        })
}

exports.viewUser = function(req, res) {
    userModel.view(function(err,result) {
        if (err) {
            res.status(500).json({response:err,messgae:err})
        } 
        else {
            res.status(201).json({response:result,message:"data inserted successfully"})
        }
    })
}
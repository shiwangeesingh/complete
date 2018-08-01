var UserModel = require('../model/user');
exports.add= function (req, res) {
	console.log("calling");
	var {mobile, name} = req.body;
		UserModel.checkAvailable(mobile)
		.then((mobileResult) => {
			if(mobileResult.length == 0) {
				let data = {mobile, name};
				UserModel.addQuery(data)
				.then((insertdata) => {
					if(insertdata.length == 0) {
						console.log("not inserted")
					}
				})
			} else {
                        console.log("inserted");
			}
		})
	}

exports.update = function (req, res) {
	var {id, mobile, name} = req.body;
	UserModel.checkAvailable({id})
	.then((idResult) => {
		if(idResult.length == 0) {
			console.log("id not available");
		} else {
			UserModel.checkAvailable({mobile})
			.then((mobileResult) => {
				if(mobileResult.length ==0 ){
					let data = {mobile, name};
					UserModel.updateQuery(data, {id})
					.then((updatedata) => {
						if(updatedata.length == 0) {
							console.log("enter a valid number");
						} else {
							console.log("data updated");
						}
					})
				} else {
					console.log("number is already registered")
				}
			})
		}
	})
}
	
}
exports.delete= function (req, res) {
	console.log("signup calling");
	var {id} = req.body;
		UserModel.checkmobileAvailable({id})
		.then((idResult) => {
		if(idResult.length == 0) {
			console.log("id not available");
			//insert
		} else {
			UserModel.deleteQuery({id})
			.then((deleteData)=>{
				if(deleteData.length==0)
					console.log("not deleted")
				else
					console.log("data deleted")
			})
		}
	
}
}
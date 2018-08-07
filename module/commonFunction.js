//var _ =require('lodash');
var constant = require ('./constant');
// exports.checkBlank = function(arr) {
// 	var arrlength = arr.length;
// 	for (var i = 0; i < arrlength; i++) {
// 		if (arr[i] === undefined) {
// 			arr[i] = "";
// 		} else {
// 			arr[i] = arr[i];
// 		}
// 		if (arr[i] === '' || arr[i] === "" || arr[i] == undefined) {
// 			return 1;
// 			break;
// 		}
// 		else{
//             console.log(arr[i])
// 		}
// 	}
// 	return 0;
// }
// exports.validation =  function(number) {
// 	var phoneNo = number;
// 	if (phoneNo.toString().length !=10) {
// 		return false;
// 	}
// 	return true;
// }
// exports.validation =  function(mobile) {
//         //var mobile = document.getElementById("mobile").value;
//         var pattern = /^\d{10}$/;
//         if (pattern.test(mobile)) {
//            console.log("Your mobile number : "+mobile);
//             return true;
//         } 
//             console.log("It is not valid mobile number.input 10 digits number!");
//             return false;

//     }

// exports.checkKeyExist = (req, arr) => {
// 	 var pattern = /^\d{10}$/;
//     var array = [];
// 		_.map(arr, (item) => {
// 			if(req.hasOwnProperty(item)) {
// 				var value = req[item];
// 				if( value == '' || value == undefined ) { 
// 					array.push(item+" can not be empty");
// 				}
//                 if(item == "mobile" && !value.match(pattern)  && typeof(value)!= "number"){
//                 array.push(constant.responseMessages.INVALID_MOBILE_NUMBER)
//                 }
//                 if(item == "name" && value.length == 0){
//                  array.push( constant.responseMessages.PARAMETER_MISSING)   
//                 }
//                 return(0);
// 			} else {
// 				array.push(item+" key is missing");
// 				return(0);
// 			}
// 		}) 
// };


// var emailRegex="^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";
// exports.checkKeyExist = (object) => {
// 		console.log(object)
		// var array = [];
		// _.map(arr, (item) => {
		// 	if(req.hasOwnProperty(item)) {
		// 		var value = req[item];
		// 		if( value == '' || value == undefined ) { 
		// 			array.push(item+" can not be empty");
		// 		}
  //               if(item == "email_id" && !value.match(emailRegex)){
  //               array.push(constant.responseMessages.Email_NOT_VALID)
  //               }
  //               if(item == "password" && value.length<8){
  //                array.push( constant.responseMessages.PASSWORD_MUST_8_CHARACTER)   
  //               }
  //               if(item == "mobile" && typeof(value)!= "number"){
  //                array.push(item+ "  should be number")   
  //               }
		// 		return(1);
		// 	} else {
		// 		array.push(item+" key is missing");
		// 		return(1);
		// 	}
		// });	
//};
const _ = require("lodash")
 exports.checkKeyExist = (object)=>{
 	let err=[];
 	let data = {};
 	_.forEach(object,(value,key)=>{
 		console.log({key,value})
 		if(value){
 			data[key]=value;
 			var pattern = /^\d{10}$/;
     	 if(data[key] == "mobile" && !value.match(pattern)  && typeof(value)!= "number"){
                 array.push(constant.responseMessages.INVALID_MOBILE_NUMBER)
                 if(item == "name" && value.length == 0){
                 array.push( constant.responseMessages.PARAMETER_MISSING)   
                 }
                 return{status:false,data:err[0]}
                }
                else{
                	return{status:true,data:data}
                }

 		}
 		else{
 			err.push('${key} is missing')
 		}
 	})
 }
 	
     // if(err.length ==0)
     // {
     // 	var pattern = /^\d{10}$/;
     // 	 if(data[key] == "mobile" && !value.match(pattern)  && typeof(value)!= "number"){
     //             array.push(constant.responseMessages.INVALID_MOBILE_NUMBER)
     //            }
     //            return{status:true,data:data}
     // }
     	
     // else
     // 	 return{status:true,data:data}

     
  //    var pattern = /^\d{10}$/;
  //   var array = [];
		// _.map(arr, (item) => {
		// 	if(req.hasOwnProperty(item)) {
		// 		var value = req[item];
		// 		if( value == '' || value == undefined ) { 
		// 			array.push(item+" can not be empty");
		// 		}
  //               if(item == "mobile" && !value.match(pattern)  && typeof(value)!= "number"){
  //               array.push(constant.responseMessages.INVALID_MOBILE_NUMBER)
  //               }
  //               if(item == "name" && value.length == 0){
  //                array.push( constant.responseMessages.PARAMETER_MISSING)   
  //               }
  //               return(0);
		// 	} else {
		// 		array.push(item+" key is missing");
		// 		return(0);
		// 	}
		// }) 
	// 	var phoneNo = number;
	// if (phoneNo.toString().length !=10) {
	// 	return false;
	// }
	// else
	// return true;

// let id = 1;
// let name = "shiwangee";
// let mobile = 8126734591; 
// let data= checkKeyExist({id,name,mobile})
// if(data.status)
// {
// 	console.log(data.data)
// }
// else
// {
// console.log('5667')
// console.log(data.data)
// }
//  let id = 1;
// let name = "shiwangee";
// let mobile = 8126734591; 
// let data= checkKeyExist({id,name,mobile})
// if(data.status)
// {
// 	console.log(data.data)
// }
// else
// {
// console.log('5667')
// console.log(data.data)
// }
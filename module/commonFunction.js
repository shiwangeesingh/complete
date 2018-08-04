exports.checkBlank = function(arr) {
	var arrlength = arr.length;
	for (var i = 0; i < arrlength; i++) {
		if (arr[i] === undefined) {
			arr[i] = "";
		} else {
			arr[i] = arr[i];
		}
		if (arr[i] === '' || arr[i] === "" || arr[i] == undefined) {
			return 1;
			break;
		}
	}
	return 0;
}
exports.validation =  function(number) {
	console.log(number);
	console.log(number.length);
	console.log("validation calling")
	var phoneNo = number;
	if (phoneNo.length !=10) {
		return false;
	}
	return true;
}
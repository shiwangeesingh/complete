exports.generateRandomString = () => {
	let text = "";
	let possible = "123456789";

	for (var i = 0; i < 4; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
};

exports.checkBlank = function(arr) {
	var arrlength = arr.length;
	for (var i = 0; i < arrlength; i++) {
		if (arr[i] === undefined) {
			arr[i] = "";
		} else {
			arr[i] = arr[i];
		}
		arr[i] = arr[i].trim();
		if (arr[i] === '' || arr[i] === "" || arr[i] == undefined) {
			return 1;
			break;
		}
	}
	return 0;
}
function is_mobile_valid(string_or_number){
            var mobile=string_or_number;
            if(mobile.length!=10){
                return false;

            }
            intRegex = /[0-9 -()+]+$/;
            is_mobile=true;
            for ( var i=0; i < 10; i++) {
                if(intRegex.test(mobile[i]))
                     { 
                     continue;
                     }
                    else{
                        is_mobile=false;
                        break;
                    }
                 }
            return is_mobile;

}
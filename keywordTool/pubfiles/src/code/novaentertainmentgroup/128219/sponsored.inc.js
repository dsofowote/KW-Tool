function checkParemeterExists(parameter) {
	//Get Query String from url
	fullQString = window.location.search.substring(1);
	paramCount = 0;
	queryStringComplete = "?";
	if (fullQString.length > 0) {
		//Split Query String into separate parameters
		paramArray = fullQString.split("&");
		//Loop through params, check if parameter exists.
		for ( i = 0; i < paramArray.length; i++) {
			currentParameter = paramArray[i].split("=");
			if (currentParameter[0] == parameter)//Parameter already exists in current url
			{

				return true;
			} else {
				return false;
			}
		}
	} else {
		return false;
	}
}

tests['excludePage'] = function() {
	var checkAccess = checkParemeterExists("nova_access_key");
	
	try {
		var sponsor = window.Drupal.settings.nova_skin.sponsored_content;
	} catch(e){
		var sponsor = false;
	};
	
	if (sponsor == "true" || checkAccess == true) {
		return false;
	} else if (sponsor == false || sponsor == "false" && checkAccess !== true) {
		return true;	
	}

}; 
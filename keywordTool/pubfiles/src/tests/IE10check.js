/*
 * TEST: IE10check
 * PURPOSE: To ensure that we do not initalise on the homepage
 * INPUTS: None
 */
tests['IE10check'] = function() {
	var myNav = navigator.userAgent.toLowerCase();

	if (!(myNav.indexOf('msie') != -1 && parseInt(myNav.split('msie')[1]) == 10 )) {
		return true;
	} else {
		return 'IE10';
	}
};
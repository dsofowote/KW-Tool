/*
 * TEST: IE9check
 * PURPOSE: To ensure that we do not initalise on the homepage
 * INPUTS: None
 */
tests['IE9check'] = function() {
	var myNav = navigator.userAgent.toLowerCase();

	if (!(myNav.indexOf('msie') != -1 && parseInt(myNav.split('msie')[1]) == 9 )) {
		return true;
	} else {
		return 'IE9';
	}
};
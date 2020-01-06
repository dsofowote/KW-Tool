/*
 * PAGESCROLL COMMON TESTS
 * ------------
 * TARGET PLATFORM: Smartphone
 * ADDITIONAL CRITERIA: None
 */

/*
 * TEST: mobile_platform
 * PURPOSE: To ensure that user is on a supported mobile platform (iPhone (iOS 10+)/ Android Mobile (Android 4+))
 * INPUTS: None
 */
tests['mobile_platform'] = function() {
	/* Mobile  platforms */
   var reg_ios = /^(?=.*((iPhone).*(OS (10|11|12|13)_))).*$/igm;
   var reg_android = /(?=.*(android|Silk) (4|5|6|7|8|9))(?=.*(mobile)).*$/igm;
   var reg_exc_windows = /(?=.*(Windows)).*$/igm;
   if (
      ( reg_ios.test( navigator.userAgent ) || reg_android.test( navigator.userAgent ) ) &&
      !reg_exc_windows.test( navigator.userAgent )
   ){
      return( true );
   } else {
      return( false );
   }
};

/*
 * TEST: mobile_brower
 * PURPOSE: To ensure if browser is a supported version and not in-app
 * INPUTS: None
 */
tests['mobile_browser'] = function() {
   var reg_safari = /^(?=.*(Safari))(?!.*(Chrome|CriOS)).*$/igm;
   var reg_chrome = /(?!.*OPR).(?=.*Safari)((Chrome|CriOS)[\/\s](\d{1,}([\.][\.A-Za-z0-9]{1,})))/igm;
   var reg_fb = /FBAV\//igm;
   if (
         reg_safari.test( navigator.userAgent ) ||
         reg_fb.test( navigator.userAgent ) ||
         reg_chrome.test( navigator.userAgent )
   ){
      return( true );
   } else {
      return( false );
   }
};

/*
 * TEST: mobile_portrait
 * PURPOSE: To ensure that user's phone is in portrait mode
 * INPUTS: none
 */
tests['mobile_portrait'] = function() {
  if (window.matchMedia("(orientation: portrait)").matches) {
      return( true );
  }else if (window.matchMedia("(orientation: landscape)").matches) {
      return('landscape');
  }else {
      return('unknown');
  }
};

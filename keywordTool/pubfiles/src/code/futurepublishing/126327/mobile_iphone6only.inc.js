/* 
 * iPhone 6 only
 * ------------
 * TARGET PLATFORM: Mobile
 * ADDITIONAL CRITERIA: Non-Optimised
 */

/*
 * TEST: mobile_iphone5
 * PURPOSE: To ensure that user is not using a iPhone 5 or 5s
 * INPUTS: None
 */

tests['mobile_atleastiphone6'] = function() {
   function iOSVersion(){
      var agent = window.navigator.userAgent,
      start = agent.indexOf( 'OS' );
      if( (agent.indexOf( 'iPhone' ) > -1) && start > -1)
         return window.Number( agent.substr( start + 3, 3 ).replace( '_', '.' ) );
      else return 0;
   }
   return iOSVersion() >= 6 && window.devicePixelRatio >= 2 && screen.availHeight<=568 ? false : true;
};

/*
 * TEST: mobile_platform
 * PURPOSE: To ensure that user is on a supported mobile platform (iPhone (iOS 7+)/ Android Mobile (Android 4+))
 * INPUTS: None
 */
tests['mobile_ios_platform'] = function() {
	/* Mobile  platforms */
   var reg_ios = /^(?=.*((iPhone).*(OS (7|8|9)_))).*$/igm;
   if ( 
      reg_ios.test( navigator.userAgent )  
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
   if (
         reg_safari.test( navigator.userAgent ) ||
         reg_chrome.test( navigator.userAgent )
   ){
      return( true );
   } else {
      return( false );
   }
};
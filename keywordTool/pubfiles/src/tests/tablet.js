/* 
 * COMMON TESTS
 * ------------
 * TARGET PLATFORM: Tablet
 * ADDITIONAL CRITERIA: None
 */

/*
 * TEST: tablet_platform
 * PURPOSE: To ensure that user is on a supported tablet platform (iPad / Android / Windows Surface)
 * INPUTS: None
 */
tests['tablet_platform'] = function() {
	/* Tablet platforms */
   var reg_win8Touch = /(?=.*Touch)Windows\sNT\s([6]{1,}([\.][2-3]{1,}))/igm;
   var reg_iPad = /^(?=.*(iPad)).*$/igm;
   var reg_android = /^(?=.*(android|Silk))(?!.*mobile).*$/igm;
   
   if ( 
      reg_win8Touch.test( navigator.userAgent ) ||
      reg_iPad.test( navigator.userAgent ) ||
      reg_android.test( navigator.userAgent )   
   ){
      return( true );
   } else {
      return( false );
   }
};

/*
 * TEST: tablet_brower
 * PURPOSE: To ensure if browser is a supported version and not in-app (except Facebook)
 * INPUTS: None
 */
tests['tablet_browser'] = function() {
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
 * TEST: tablet_legacyIOS
 * PURPOSE: To ensure exclude iOS 5 and below
 * INPUTS: None
 */

tests['tablet_legacyIOS'] = function() {
   var reg_tablet = /^(?=.*((iPad).*(OS (1|2|3|4|5)_))).*$/igm;
   if (
         reg_tablet.test( navigator.userAgent )
   ){
      /* Excluded OS matched */
      return( false );
   } else {
      return( true );
   }
};
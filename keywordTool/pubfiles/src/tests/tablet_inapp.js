/* 
 * TARGET PLATFORM: Tablet INAPP
 * ADDITIONAL CRITERIA: None
 */

/*
 * TEST: tablet_platform
 * PURPOSE: To ensure that user is on a supported tablet platform (iPad)
 * INPUTS: None
 */
tests['inapp_platform'] = function() {
   /* Tablet platforms */
   var reg_iPad = /^(?=.*(iPad)).*$/igm;   
   if ( 
      reg_iPad.test( navigator.userAgent ) 
   ){
      return( true );
   } else {
      return( false );
   }
};

/*
 * TEST: inapp_brower
 * PURPOSE: To ensure if browser is in-app
 * INPUTS: None
 */
tests['inapp_browser'] = function() {
   var reg_safari = /^(?=.*(Safari))(?!.*(Chrome|CriOS)).*$/igm;
   var reg_inApp = /(?!.*[\[]).(?=.*mobile)(ipad).*$/igm;
   if (
      reg_inApp.test( navigator.userAgent ) &&
      !reg_safari.test( navigator.userAgent )
   ){
      return( true );
   } else {
      return( false );
   }
};

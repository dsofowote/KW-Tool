/* 
 * COMMON TESTS
 * TARGET PLATFORM: Tablet
 * ADDITIONAL CRITERIA: Responsive sites (which can support android)
 */


/*
 * TEST: tabletresponsive_notiOS6
 * PURPOSE: To ensure that user is on a iPad running iOS 7 or above
 * INPUTS: None
 */
tests['tablet_notiOS6'] = function() {
   var reg_tablet = /^(?=.*((iPad).*(OS (1|2|3|4|5|6)_))).*$/igm;
   if (
         reg_tablet.test( navigator.userAgent )
   ){
      /* Excluded OS matched */
      return( false );
   } else {
      return( true );
   }
};

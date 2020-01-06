/*
 * TEST: tablet_facebook
 * PURPOSE: To give visibility on which failed inventory is actually coming from Facebook
 * INPUTS: None
 */
tests['tablet_facebook'] = function() {
   /* Tablet platforms */
   var reg_fb = /FBAV\//igm;  
   if ( 
      reg_fb.test( navigator.userAgent ) 
   ){
      /* This is facebook */
      return( false );
   } else {
      /* This is not facebook */
      return( true );
   }
};
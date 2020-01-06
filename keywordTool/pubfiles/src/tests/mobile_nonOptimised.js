/* 
 * NON OPTIMISED MOBILE
 * ------------
 * TARGET PLATFORM: Mobile
 * ADDITIONAL CRITERIA: Non-Optimised
 */

/*
 * TEST: mobile_iphone5
 * PURPOSE: To ensure that user is not using a iPhone 5 or 5s
 * INPUTS: None
 */
tests['mobile_iphone5'] = function() {
   function iOSVersion(){
      var agent = window.navigator.userAgent,
      start = agent.indexOf( 'OS ' );
      if( (agent.indexOf( 'iPhone' ) > -1) && start > -1)
         return window.Number( agent.substr( start + 3, 3 ).replace( '_', '.' ) );
      else return 0;
   }
   return iOSVersion() >= 6 && window.devicePixelRatio >= 2 && screen.availHeight==548 ? false : true;
};


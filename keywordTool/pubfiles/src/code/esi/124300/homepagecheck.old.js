/*
 * TEST: homepageCheck
 * PURPOSE: To ensure that we do not initalise on the homepage
 * INPUTS: None
 */
ns_local.tests['homepageCheck'] = function() {
   if ( !(document.location.pathname === '/') ){
      return true;
   } else {
      return 'homepage';
   }
};
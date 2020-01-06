/*
 * TEST: excludePage
 * PURPOSE: To ensure that we do not initalise on pages excluded by adOps
 * INPUTS: None
 */
tests['excludePage'] = function() {
   if ( document.location.pathname === '/news/uk-news/great-lotto-shake-up-bosses-make-5895665' ){
      return false;
   } else {
      return true;
   }
};
/*
 * TEST: excludePage
 * PURPOSE: To ensure that we do not initalise on pages excluded by adOps
 * INPUTS: None
 */
tests['excludePage'] = function() {
   if ( document.location.pathname === '/news/uk/national-lottery-changes-lucky-number-59-new-balls-introduced-in-major-draw-overhaul-that-will-guarantee-more-millionaires-10324234.html' ){
      return false;
   } else {
      return true;
   }
};
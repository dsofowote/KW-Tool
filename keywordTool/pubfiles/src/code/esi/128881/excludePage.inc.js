/*
 * TEST: excludePage
 * PURPOSE: To ensure that we do not initalise on pages excluded by adOps
 * INPUTS: None
 */
tests['excludePage'] = function() {
   if ( document.location.pathname === '/news/uk/national-lottery-changes-lucky-number-59-new-balls-introduced-in-major-draw-overhaul-that-will-10324234.html' || document.location.pathname === '/news/world/middle-east/saudi-arabia-executions-kingdom-to-behead-50-men-convicted-of-terrorism-offences-despite-threat-of-a6750631.html' || document.location.pathname === '/news/world/americas/man-high-on-meth-fights-off-15-police-officers-while-masturbating-in-public-9030429.html'){
      return false;
   } else {
      return true;
   }
};

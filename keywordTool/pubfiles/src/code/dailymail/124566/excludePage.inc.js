/*
 * TEST: excludePage
 * PURPOSE: To ensure that we do not initalise on pages excluded by adOps
 * INPUTS: None
 */
tests['excludePage'] = function() {
   if ( document.location.pathname === '/news/article-3127201/Banking-big-lotto-win-odds-just-got-worse-10-balls-added-1-45m-chance-jackpot.html' ){
      return false;
   } else {
      return true;
   }
};
/*
 * TEST: widePage
 * PURPOSE: To ensure that we do not initalise on pages which are expanded (For Big Footy)
 * INPUTS: None
 */

tests['widePage'] = function() {
  if ((window.location.href.indexOf("forum") > -1) && ( document.getElementsByClassName("xb-toggle-default").length > 0 ) || (window.location.href.indexOf("forum") == -1)) {
      return( true );
   } else {
      return( false );
   }
};

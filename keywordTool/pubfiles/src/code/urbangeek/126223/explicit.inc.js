/*
 * TEST: explicitContent and newContent
 * PURPOSE: To ensure that we do not initalise on explicit content, or videos that are under 14 days old.
 * INPUTS: None
 */
tests['explicitContent'] = function() {
   if( window.DM_Context.video_is_explicit == true ){
      return false;
   } else {
      return true;
   }
};

tests['newContent'] = function() {
   if( window.DM_Context.video_lifetime_in_days < 1 ){
      return false;
   } else {
      return true;
   }
};
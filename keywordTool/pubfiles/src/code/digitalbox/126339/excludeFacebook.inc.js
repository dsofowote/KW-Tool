tests['mobile_facebook'] = function() {
   var reg_fb = /FBAV\//igm;
   if (
      reg_fb.test( navigator.userAgent )
   ){
      return( false );
   } else {
      return( true );
   }
};

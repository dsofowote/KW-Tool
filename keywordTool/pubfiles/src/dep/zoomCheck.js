/* Test to see if iPad users are zoomed in when PS is displayed */
integration.on("adServed", function(e) {
   var reg_iPad = /^(?=.*(iPad)).*$/igm;
   if ( reg_iPad.test( navigator.userAgent ) ){
      /* iPad user, carry out test */
      setTimeout(function(){
         if ( document.documentElement.clientWidth / window.innerWidth > 1 ){
            /* Record zoom event */
            integration.telemetry.recordCustom("iPadZoom");
         }
      }, 3000);
   }
});
   
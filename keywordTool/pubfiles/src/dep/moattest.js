integration.on("adCallResult", function(e) {
   if (e.data.hasSkin) {
      try{
         var reg_fb = /FBAV\//igm;
         var reg_validBrowser = /^(?=.*(Safari|Chrome|CriOS)).*$/igm;
         var reg_inApp = /(?!.*[\[]).(?=.*mobile)(ipad).*$/igm;
         if (!(reg_fb.test(navigator.userAgent) || (reg_inApp.test(navigator.userAgent) && !reg_validBrowser.test(navigator.userAgent)))) {
            integration.telemetry.recordCustom("MoatEnabled_hasSkin");
         } else {
            integration.telemetry.recordCustom("MoatDisabled_hasSkin");
         }
      }catch(e){}
   } else {
      try{
         var reg_fb = /FBAV\//igm;
         var reg_validBrowser = /^(?=.*(Safari|Chrome|CriOS)).*$/igm;
         var reg_inApp = /(?!.*[\[]).(?=.*mobile)(ipad).*$/igm;
         if (!(reg_fb.test(navigator.userAgent) || (reg_inApp.test(navigator.userAgent) && !reg_validBrowser.test(navigator.userAgent)))) {
            integration.telemetry.recordCustom("MoatEnabled_noSkin");
         } else {
            integration.telemetry.recordCustom("MoatDisabled_noSkin");
         }
      }catch(e){}
   }
});
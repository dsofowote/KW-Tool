/*
 * TEST: orientation_check
 * PURPOSE: To ensure that PageSkin loads in Portrait orientation only 
 * INPUTS: none
 * DEFAULT: Load PageSkin in Portrait orientation only 
 */
tests['orientation_check'] = function() {
  if (window.matchMedia("(orientation: portrait)").matches) {
      return( true );
  }else if (window.matchMedia("(orientation: landscape)").matches) {
      return('landscape');
		}else {
			return('unknown');
		}
};

//function
integration.custom.checkOrientation = function() {
	if (window.matchMedia("(orientation: landscape)").matches) {
		integration.base.unloadAd();
		$('body').removeClass('inskinLoaded');
		integration.telemetry.recordCustom("PS unloaded on Landscape");
	}
} 

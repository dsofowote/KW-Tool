// Interactive Investor Desktop
// Give this Publisher Script an ID so it won't get loaded twice on the same
// page. The return of this function is now standardized to the following form:
// <dir name>/<file name without extension> (relative to "out/raw/" folder:
function script_id() {
	return '123973/default';
}

// the code below will only run once, even if the ad tag is loaded multiple
// times on the page, however, the function "on_script_loaded()" below will get
// called every time this file is included on page:
(function() {
	// get all parameters passed to this script:
	var scriptParams = ns_local.Util.getScriptParams();
	//console.log('all parameters passed to Publisher Script:');
	//console.log(scriptParams);

	// get all InSkin specific parameters passed to this script:
	var scriptInSkinParams = ns_local.Util.getScriptInSkinParams();
	//console.log('all InSkin specific parameters passed to Publisher Script:');
	//console.log(scriptInSkinParams);

	// define some integration parameters:
	window.InSkinParams['myPageSkin'] = {
		'srv_SectionID' : '123973',
		'srv_AdvertIDs': scriptInSkinParams.srv_AdvertIDs, 
        'plr_ClickURL' : scriptInSkinParams.plr_ClickURL, 
		'plr_UseCreativeSettings' : true,
		'plr_ContentW' : 970,	
		'plr_ContentType' : 'PAGESKINEXPRESS',
		'plr_FrameTop' : 90,
		'plr_FrameSide' : 130,
		'plr_FrameBottom' : 90,
		'plr_PageAlignment' : 'center',	
		'plr_HideElementsByID' : '[id^=div-gpt-ad-]',
		'plr_HideElementsByClass' : '',
		'plr_PageHeightAdjustment' : -30		
	};

	// define a callback for when the InSkin Tag gets loaded:
	var on_tag_loaded = function(InSkinObj) {
		// make sure the InSkin object is the one we're looking for:
		if(InSkinObj.id != 'myPageSkin')
			return;
			
			InSkinObj.addEventListener(InSkinObj.EVENT_AD_CALL_RESULT, function(e) {	
				if (e.data.hasSkin) { 
					InSkin.$('#pre-header-blocks').css({'position':'relative','z-index':'100'}).prependTo('#page');
					InSkin.$('#page').css('margin-top','0px');
					InSkin.$('#footer').css('marginBottom','0px');
            	}
			});
			
		// remove this callback:
		ns.Callbacks.del('InSkinTagLoaded', on_tag_loaded);
		
			//console.log('Done, InSkin object with ID "' + InSkinObj.id + '" is created');
		if(screen.width >= 1260) {
			InSkinObj.init();
		}
	};
	// load the appropriate InSkin Tag:
	ns_local.Util.loadInSkinTag('generic', {
		'plr_InSkinID' : 'myPageSkin'
	}, on_tag_loaded);
})();

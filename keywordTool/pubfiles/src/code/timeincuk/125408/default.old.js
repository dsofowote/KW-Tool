// Give this Publisher Script an ID so it won't get loaded twice on the same
// page. The return of this function is now standardized to the following form:
// <dir name>/<file name without extension> (relative to "out/raw/" folder:
function script_id() {
	return '125408/default';
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
		'srv_SectionID' : '125408',
		'srv_AdvertIDs' : scriptInSkinParams.srv_AdvertIDs,
		'plr_ClickURL' : scriptInSkinParams.plr_ClickURL,
		'plr_UseCreativeSettings' : true,
		'plr_ContentW' : 1016,
		'plr_ContentType' : 'PAGESKINEXPRESS',
		'plr_FrameTop' : 90,
		'plr_FrameSide' : 130,
		'plr_FrameBottom' : 90,
		'plr_PageAlignment' : 'center',
		'plr_UseFullVersion' : true,
		'plr_HideElementsByID' : 'leaderboard, mpu, ads',
		'plr_HideElementsByClass' : '',
		'plr_PageHeightAdjustment' : -26
	};

	var css = '#gallery-promo  { margin-top: -37px !important; }', head = document.getElementsByTagName('head')[0], style = document.createElement('style');

	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);

	// define a callback for when the InSkin Tag gets loaded:
	var on_tag_loaded = function(InSkinObj) {
		// make sure the InSkin object is the one we're looking for:
		if (InSkinObj.id != 'myPageSkin')
			return;

		InSkinObj.addEventListener(InSkinObj.EVENT_AD_CALL_RESULT, function(e) {
			if (e.data.hasSkin) {
				// your code here
				InSkin.$('.fb-recommendations-bar').hide();
				InSkin.$('#container').css('paddingTop', '10px');
				InSkin.$('#masthead').css('zIndex', '5000');
			}
		});
		InSkinObj.addEventListener(InSkinObj.EVENT_AD_SERVED, function(e) {
			refreshWait();
			/* Logic to call function on publishers page */
			try {
				ipc.inskin.callback();
			} catch(e) {
			}
		});
		function refreshWait() {
			try {
				if (window.ipcTags.type == "gallery") {
					setTimeout(refreshGallery, 60 * 1000);
				}
			} catch(e) {
			}
		}

		function refreshGallery() {
			refreshcount++;
			InSkinObj.unloadAd();
			InSkinObj.makeAdCall({});
			telemetry.recordCustom('refresh_' + refreshcount);
		}

		// remove this callback:
		ns.Callbacks.del('InSkinTagLoaded', on_tag_loaded);

		//console.log('Done, InSkin object with ID "' + InSkinObj.id + '" is created');
		if (screen.width >= 1260) {
			InSkinObj.init();
		}
	};
	// load the appropriate InSkin Tag:
	ns_local.Util.loadInSkinTag('generic', {
		'plr_InSkinID' : 'myPageSkin'
	}, on_tag_loaded);
})();

integration.meta = {
	'sectionID' : '126230',
	'siteName' : 'Belfast Telegraph - Desktop - (UK & IE)',
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '681801',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 970,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : 'advert',
	'plr_FastInit' : true,
	'plr_PageScanExclude' : '.w103, .w4, #footer, .single'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var ms_ie = false;
		var ua = window.navigator.userAgent;
		var old_ie = ua.indexOf('MSIE ');
		var new_ie = ua.indexOf('Trident/');

		if ((old_ie > -1) || (new_ie > -1)) {
			ms_ie = true;
		}

		if (!ms_ie) {
			//IE specific code goes here
			$("head").append("<style>.w116:before {max-width: 970px !important; margin: 0 auto !important;}</style>");
		}

	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://uk.ads.justpremium.com/adserve/js.php?zone=42333\"><\\script>";
};

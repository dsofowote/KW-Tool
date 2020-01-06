integration.meta = {
	'sectionID' : '126423',
	'siteName' : 'WhatCulture - Desktop  - (UK)',
	'platform' : 'desktop'
};

function setWindow() {
	return currentWindow.top;
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '706834',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	"plr_URLKeywords" : 1
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('head').append('<style type="text/css">#layout-top {background: initial !important;} </style>');
		if ($("#app-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#app-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -56,
			});
		}
		$('body > footer, #ad-layout-top').css({
			'max-width' : '1000px',
			'margin' : '0 auto'
		});
		if (integration.params.version) {
		} else {
			var URL = window.location.href;
			integration.telemetry.recordCustom(URL);
		}
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<iframe seamless=\"seamless\" style=\"width:0px;height:0px;border:none;position:absolute;\" src=\"//delivery.switch.whatculture.com/adserver/passback.html\"></iframe>";
};

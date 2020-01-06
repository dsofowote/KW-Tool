integration.meta = {
	'sectionID' : '128598',
	'siteName' : 'Dexerto - Desktop - ( INT exc. UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1025312',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1150,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#stickAboveContent").css({"height":"0px"});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/175840252/MMPlus/Dexerto/Passback/Desktop/970x250', [[970,250],[728,90]])\n                    .setTargeting('Passback', ['InSkin'])\n                    .setClickUrl('%%CLICK_URL_UNESC%%')\n                    .display();\n<\\script>";
};

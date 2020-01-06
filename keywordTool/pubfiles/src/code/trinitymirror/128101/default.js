integration.meta = {
	'sectionID' : '128101',
	'siteName' : 'RSVP Live - Desktop - ( IE UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1480]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '976277',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1220,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".gpt.top-slot, .top-slot").css({
			"max-height" : "0px"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'> googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[970,250]]) .setClickUrl('%%CLICK_URL_UNESC%%') .display(); <\\script> ";
};
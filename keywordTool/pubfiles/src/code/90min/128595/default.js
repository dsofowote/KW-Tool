integration.meta = {
	'sectionID' : '128595',
	'siteName' : 'Dexerto - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1410]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1025309',
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
		$(".dn.db-l.tc").css({
			"height" : "0px"
		});

		$("#stickAboveContent").css({"height":"0px"});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'MMPlus/Dexerto/Passback/Desktop/970x250' ### Size: [[970,250],[728,90]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/175840252/MMPlus/Dexerto/Passback/Desktop/970x250', [[970,250],[728,90]])\n                    .setClickUrl('%%CLICK_URL_UNESC%%')\n                    .display();\n<\\script>\n<!-- End -->\n";
};

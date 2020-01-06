integration.meta = {
	'sectionID' : '126528',
	'siteName' : 'Daily Star - Desktop - (IE)',
	'platform' : 'desktop'
};

integration.disableKWFilters = true;




integration.testParams = {
	'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706956',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "pub_Top, hidden_pub_TopRight",
	"plr_URLKeywords" : 1,
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#innercontainer").css({
			"padding-top" : "10px"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<!-- PassBack AdSlot 1 for Ad Unit 'ns-network/inskin_passback' ### Size: [[970,250]] --><script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};

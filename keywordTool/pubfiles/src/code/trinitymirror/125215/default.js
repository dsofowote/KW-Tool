integration.meta = {
	"sectionID" : "125215",
	"siteName" : "Mirror Chronicle Live",
	"publisher" : "mirror",
	"platform" : "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1230]
};

integration.params = {
	'mf_siteId' : '706271',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 970,
	"plr_UseFullVersion" : true,
	"plr_URLKeywords" : 1,
	"plr_HideElementsByClass" : "box-bottom",
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_BarneyThresholdClicks" : 4,
	"plr_BarneyThresholdRate" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('#div-gpt-ad-oop').css({
			'width' : '970px',
			'margin' : '0 auto'
		});
		$('#page').css('margin-top', '0px');
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'> googletag.pubads().definePassback('/5293/tm-network/inskin_passback', [[970,250]]) .setClickUrl('%%CLICK_URL_UNESC%%') .display(); <\\script>";
};

integration.meta = {
	"sectionID" : "125396",
	"siteName" : "Daily Express",
	"publisher" : "northernandshell",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1240]
};

integration.params = {
	'mf_siteId' : '707265',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "superbanner, advert",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1,
	'plr_PageScanExclude' : ' #header_addons, .navigation, .sub-nav, .right-column, .mainFooter '
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').css('overflowX', 'visible');
		$('#superbanner').css('height', '0px');
		$("#innercontainer").css({
			"padding-top" : "10px"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};

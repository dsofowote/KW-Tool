integration.meta = {
	'sectionID' : '126268',
	'siteName' : 'Daily Express - Desktop - (AU)',
	'platform' : 'desktop'
};




integration.testParams = {
	"desktop_resolution" : [1240]
};

integration.params = {
	'mf_siteId' : '708148',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_UseFullVersion" : true,
	"plr_URLKeywords" : 2,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "superbanner, advert"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("body > .bodywrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("body > .bodywrapper");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$('body').css({
			'overflowX' : 'visible'
		});
		$('#superbanner').css({
			'height' : '0px'
		});
		$("head").append("<style>.headerShell.mini .innerShell .inner{display: none !important;}</style>");
		$("#innercontainer").css({
			"padding-top" : "10px"
		});
	}
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/34722903/ns-network/inskin_passback', [[970,250]]).setClickUrl('%%CLICK_URL_UNESC%%').display();<\\script>";
};

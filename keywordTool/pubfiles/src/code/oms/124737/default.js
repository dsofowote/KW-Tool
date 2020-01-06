integration.meta = {
	'sectionID' : '124737',
	'siteName' : 'Westdeutsche Zeitung - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707213',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	"plr_PageHeightAdjustment" : -116
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.park-portal--leaderboard, .park-portal--superbanner{display: none !important;} .park-fakebody{padding-top: 0 !important;}</style>");
		$('.park-footer').css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.park-footer__wrapper{margin: 0 !important;} .park-fakebody{overflow: visible !important;}</style>");
		$("head").append("<style>.park-article__buttons-wrapper, .park-footer__wrapper, .park-header__offer .park-offer, .park-header__search>.park-searchform .park-input__input, .park-header__skiplinks, .park-header__wrapper, .park-snackbar__wrapper, main{margin: 0 auto !important;}</style>");
	}
});

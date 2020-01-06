integration.meta = {
	'sectionID' : '126099',
	'siteName' : 'Haller Kreisblatt Desktop',
	
	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707780',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '[id^=adcloud_], [id^=google_ads_], [id=uAd_]'
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#em_ad_superbanner").css({
			"height" : "0px"
		});
		$("body").css({
			"overflow-x" : "visible"
		});
	}
});

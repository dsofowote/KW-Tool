integration.meta = {
	'sectionID' : '128044',
	'siteName' : 'ETNet - (Diva Section) - Desktop - ( HK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1540]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '971044',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').css({
			"width" : "1280px",
			"margin" : "0 auto"
		});
		
		$('#Sitemap, #MemContainer, #L3MenuContainer').css({
			"width" : "1280px",
			"right" : "0px",
			"left" : "0px",
			"margin" : "0 auto",
			"box-shadow" : "none"
		});
		
		$('#TopBannerNew').css({
			"display" : "none"
		});
		
		$("head").append('<style>nav.fixed{max-width: 1280px !important; left: 0 !important; top: 0 !important; right: 0 !important; margin: 0 auto !important;}</style>');
		$("head").append('<style>header{margin-top: 0 !important;} .ism-frame{z-index: 99 !important;}</style>');
	}
});


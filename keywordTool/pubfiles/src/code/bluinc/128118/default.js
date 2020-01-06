integration.meta = {
	'sectionID' : '128118',
	'siteName' : 'Cosmopolitan MY - (Unpub. Until Approv.) - Desktop - ( MY )',
	'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '982099',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var width = $(window).width();
		var sideWidth = (width - 984) / 2;
		$(".indianapolis-optin-visible").css({
			"right" : sideWidth + 4
		});
	}
});

integration.on('adServed', function(e) {
		$(".ism-frame").parent().css({
			"z-index" : "9999999"
		});
});

integration.meta = {
	'sectionID' : '127633',
	'siteName' : 'Top Gear - Desktop - (INT ex UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '768790',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1320,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body > header, body > footer, body > div.l-before-footer").css({
			"width" : "1320px",
			"margin" : "0 auto"
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	if ($("header").hasClass("is-fixed")) {
		integration.base.setCfg({
			"plr_ScrollAdjustment" : 45
		})
	}else{
		integration.base.setCfg({
			"plr_ScrollAdjustment" : 0
		})
	}
};


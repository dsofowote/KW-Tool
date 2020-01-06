integration.meta = {
	'sectionID' : '128366',
	'siteName' : 'loveproperty - Desktop - ( UK )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1220]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1006163',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#header-module, .page-nav__wrapper.page-nav--topics").css({
			"max-width" : "960px",
			"margin" : "auto"
		});
		var toTopLeft = (($(window).width() - 960) / 2) + 5;
		$("head").append("<style>.to-top.ng-isolate-scope{left: " + toTopLeft + "px !important;}</style>");
	}
});

integration.on('layoutChange', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "500001"
	});
});
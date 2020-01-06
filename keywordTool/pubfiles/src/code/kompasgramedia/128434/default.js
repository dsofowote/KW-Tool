integration.meta = {
	'sectionID' : '128434',
	'siteName' : 'BolaSport - Desktop - ( ID )',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013325',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var hHeight = $('.mainmenu').height();
		integration.base.setCfg({
			"plr_ScrollAdjustment" : hHeight
		});
		$('header, footer').css({
			"width" : "1100px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.mainmenu.fixed{left: 0 !important; right: 0 !important;}</style>");

		$("head").append("<style>@media only screen and (min-width: 1400px) {html{overflow-x: hidden;}}</style>"); // Hiding the horizontal scrollbar in Chrome.
	}
});

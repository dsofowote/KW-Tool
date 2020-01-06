integration.meta = {
	'sectionID' : '128064',
	'siteName' : 'Goody Feed - Desktop - (SG) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1424]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '973478',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1164,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".backstretch").css({
			"display" : "none"
		});
		$("#td-outer-wrap").css({
			"max-width" : "1164px",
			"margin" : "auto"
		});
$("head").append("<style>.td-header-menu-wrap.td-header-gradient.td-affix{max-width: 1164px !important;}</style>");
	}
});

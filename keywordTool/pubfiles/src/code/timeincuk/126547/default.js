integration.meta = {
	'sectionID' : '126547',
	'siteName' : 'InStyle (Competitions) - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707068',
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
		$('body').css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		$("head").append("<style>main.content .partial.hero.single{width: 100% !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"top" : "48px"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
	return inskinPassback();
};

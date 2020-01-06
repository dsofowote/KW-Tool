integration.meta = {
	'sectionID' : '127598',
	'siteName' : ' Cosmopolitan - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '762742',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 960,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FastInit" : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".wrapperFooter, #wrapper, .outerWrapper").css({
			"max-width" : "960px",
			"margin" : "0 auto"
		});
		$("body > div.adRowTopWrapper").css({
			"display" : "none"
		});
	}
});

integration.meta = {
	'sectionID' : '127480',
	'siteName' : 'Marbacher Zeitung - Desktop - (DE)',
	'platform' : 'desktop'
};

integration.testParams = {
	/* No Screen Resolution for OMS integrations */
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '726476',
	'plr_PageAlignment' : 'custom',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	"plr_FramePositionCSS" : "margin: 0 auto;"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#superbanner{display:none !important;}</style>");
		$(".site.ressort, .site.article").css({
			"margin" : "0 auto",
			"padding-left" : "0px"
		});
		$("#article-social-bar").hide();
	}
});

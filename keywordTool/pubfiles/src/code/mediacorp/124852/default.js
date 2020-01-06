integration.meta = {
	'sectionID' : '124852',
	'siteName' : 'Channel NewsAsia',

	'platform' : 'desktop',
	'restrictions' : ''
};

integration.testParams = {
	'desktop_resolution' : [1460]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707349',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1200,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '[id^="div-gpt-ad"]',
	'plr_HideElementsByClass' : '',
	'plr_URLKeywords' : 2,
	'plr_FastInit' : true

};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".c-header--default").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".c-header--default");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 62
			});
		}
		$(".c-header--default > .is-region-02, .nav-primary__region").css({
			"z-index" : "10"
		});
		$(".c-footer--default, #main").css({
			"max-width" : "1200px",
			"margin" : "0 auto"
		});
		$(".u-grid .grid__col-12").css({
			"width" : "100%"
		});
	}
});

integration.on('adServed', function(e) {
	$("#inskinanchor").css({
		"z-index" : "1"
	});
});

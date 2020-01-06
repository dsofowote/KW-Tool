integration.meta = {
    'sectionID' : '128408',
    'siteName' : 'Liberty Times-istyle - Desktop - (TW) ',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1010111',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var element = $("div.header");
		var headHeight = $(element).height();
		var headHeight2 = $("center.cheader").height();
		if ($("center.cheader").next().length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(element);
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headHeight2,
				plr_ScrollAdjustment : -headHeight2
			});
		}
	}
	$("div.header, .app-wrapper").css({
		"overflow" : "initial",
		"width" : "1000px",
		"margin" : "0 auto"
	});
	$("head").append("<style>center.cheader, .header{right: 0; left: 0 !important;} body, .app-wrapper{overflow: visible !important;}</style>");
	var pWidth = $(window).width();
	var headerMargin = (($(window).width() - 1000) / 2);
	$("header.boxTitle").css({
		"width" : pWidth,
		"margin-left" : -headerMargin,
		"padding-left" : headerMargin,
		"padding-right" : headerMargin
	});
});

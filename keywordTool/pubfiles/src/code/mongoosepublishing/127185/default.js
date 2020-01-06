integration.meta = {
   'sectionID' : '127185',
   'siteName' : 'Timeout Kuala Lumpur - Tablet - (MY)',
   'platform' : 'tablet'
};




integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707465',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1050,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("#main-container, #content").css({
			"max-width" : "1050px",
			"margin" : "0 auto"
		});
		$("head").append("<style>.search-trigger{margin-left:0px !important} .nav>.nav-item{padding:1rem} .navigation-wrapper.sticky-md{max-width:1050px;margin:0 auto}</style>");
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			$("#main-container").css({
				"margin" : "0px"
			});
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
	}
});

integration.on('adServed', function(e) {
	var wwidth = $(window).width();
	var cwidth = (wwidth - 1050) / 2;
	$(".nav-utils").css({
		"position" : "relative",
		"right" : cwidth
	});
	$(".header-ad-panel, .ad.ad-header").css({
		"max-width" : "1050px",
		"margin" : "0px auto"
	});
});


/* Passback Tag */
window.ISMPassback = function() {
   return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/6717330/Time_Out_Kuala_Lumpur//pageskin', [[1920, 1080], [1, 1]]).display();\n<\\script>";
};
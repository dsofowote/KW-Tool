integration.meta = {
	'sectionID' : '128547',
	'siteName' : 'Bunte - Tablet - (AT CH DE)',
	'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1021876',
	'plr_PageAlignment' : 'left',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ScrollAdjustment' : 60,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		integration.custom.FrameSide = e.data.plr_FrameSide;
		$("head").append("<style>#header > .fe-container, .fe-nav-secondary > .fe-container{margin-left: "+ integration.custom.FrameSide +"px !important;}</style>");
		$("head").append("<style>.bg-grey-dark .fe-container{margin: 0 auto;}</style>");
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			/* Pageskin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("head").append("<style>.bg-grey-darkest .fe-container, .bg-grey-dark .fe-container{margin: 0 !important;}</style>");
		}
		var headHeight = $("#top").height();
		$("head").append("<style>body{border: none !important;} .fe-cosmobar{padding: 15px 0 30px !important; width: 1000px; margin: 0;} .fe-cosmobar > .container, footer{width: 1000px; margin: 0;} .bg-grey-darkest > .container{margin: 0 !important;}</style>");
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_StartScrollOnAnchor" : true,
				"plr_PageHeightAdjustment" : -140
			});
		}
		$("#inskinanchor").css({
			"margin-top" : "140px",
			"position" : "relative"
		});
		$(".top-themes, footer.footer, main > .container-fluid, .top-themes > .container, .bg-grey-dark, .bg-grey-darkest .fe-container, .relative").css({
			"max-width" : "1000px",
			"margin" : "0"
		});
		$("main").css({
			"margin-left" : "0"
		});
		$(".fe-promo-main").css({
			"display" : "none"
		});
		$("head").append("<style>.fe-cosmobar > .fe-container{margin: 0 auto;} main > .fe-container{margin-left: 10px; width: 1000px}</style>");
	}
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/40748507/stu_bun_desktop/inskin/fallback', [728, 90]).setTargeting('adkeyword', ['inskin_fallback']).display();<\\script>";
};

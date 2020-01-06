integration.meta = {
	'sectionID' : '125982',
	'siteName' : 'Petit Chef - Tablet - France',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706714',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1003,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		/* for testing purposes, to remove overlay box */
		$(".ui-widget-overlay").attr("style", "background: none !important; display: none;");
		$(".ui-dialog").css({
			"display" : "none"
		});
		/* code for site  */
		$("#fixed-social-box").css({
			"margin-left" : "0"
		});
		$("#header-sticky").css({
			"max-width" : "1003px",
			"margin-left" : "-501.5px",
			"left" : "50%"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("body").attr("style", "margin: 0 !important;");
			$("head").append("<style>body {margin-left: 20px !important;}</style>");
			$("#header-sticky").css({
				"margin-left" : "20px",
				"left" : "0%"
			});
		}
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	var phAccHeight = $("#ph-account").height();
	var phLogoHeight = $("#ph-logo").height();
	var sitemenuHeight = $("#sitemenu").height();
	if (height < (integration.custom.PageSkinTopPanel + phAccHeight + phLogoHeight + sitemenuHeight)) {
		$("#ph-search").css({
			"position" : "relative"
		});
	} else {
		$("#ph-search").css({
			"position" : "fixed"
		});
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"http://ads.ayads.co/ajs.php?zid=2140\"><\\script> ";
};
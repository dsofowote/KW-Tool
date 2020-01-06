integration.meta = {
	"sectionID" : "125303",
	"siteName" : "Cosmopolitan.fr",
	"publisher" : "groupemarieclaire",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706599',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1010,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	'plr_BarneyThresholdClicks' : 2,
	'plr_BarneyThresholdRate' : 1,
};


integration.on("layoutChange", function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameSide = e.data.plr_FrameSide;
	$('body').append('<style type="text/css">.FacebookPopin {right: ' + (integration.custom.FrameSideRight + 10) + 'px !important;}</style>');
	$('body').append('<style type="text/css">#pulpix .px-sticky-widget.px-sticky-widget-left {left: ' + (integration.custom.FrameSide + 10) + 'px !important;}</style>');

	if (ProductPageSkinEdge == 1) {
		window.pageskinLeftPanel = e.data.plr_FrameSide;
		var cookieMargin = 0 - pageskinLeftPanel;
		$(".cookieNotification").css({
			"margin-left" : cookieMargin
		});
	}
});


integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#beforeHeader").css({
			"padding-top" : "15px"
		});
		$("#header, .ArticleLink--highlight").css({
			"max-width" : "1010px",
			"margin" : "0 auto"
		});
		$(".Menu-list").css({
			"max-width" : "1010px",
			"white-space" : "normal"
		});
		$(".SiteHeader-contentContainer").css({
			"max-width" : "1010px",
			"margin" : "0 auto",
			"right" : "0",
			"left" : "0"
		});
		$("#RetractableMenu").css({
			"z-index" : "1000001"
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
			$('#header, .BodyContent, .ArticleLink ').css({'margin-left':'-10px'});
			$('.SiteHeader-content').css({'left': -(integration.custom.FrameSideRight)/2});
			$('#footer').css({'max-width':'1010px'});
		} else {
			$("#page").css({
				"max-width" : "1010px",
				"margin" : "0 auto"
			});
		}
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000002"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"//static.adserver.pm/position/COSMOPOLITAN/RG/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};

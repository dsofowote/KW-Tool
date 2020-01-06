integration.meta = {
	'sectionID' : '125872',
	'siteName' : 'Marie Claire',

	'platform' : 'tablet',
	'restrictions' : ''
};

integration.testParams = {
};

integration.flaggedTests = [];


integration.params = {
	'mf_siteId' : '707662',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1024,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {


		$(".SiteHeader--minimal, #body, #footer").css({
			"width" : "1020px"
		});


		$(".Menu .Menu-list li.Menu-item").slice(8).css({
			"display" : "none"
		});
		$("#header").css({
			"margin-top" : "10px"
		});

		$('head').append('<style type="text/css">.SiteHeader, .Menu .Menu-wrapper, body.is-scrolled .SiteHeader-contentContainer {width:1020px !important;}</style>');

		$('head').append('<style type="text/css">body.is-scrolled .ArticleHeader-imageContainer {width:1020px !important; max-width:1020px !important;}</style>');
		$(".SiteHeader-content, #body").css({
			"max-width" : "1024px",
			"margin" : "0 auto",
			"width" : "100% !important",
			"left" : "0",
			"right" : "0"
		});
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
			$('head').append('<style type="text/css">.SiteHeader-content, .SiteHeader, .Menu .Menu-wrapper {margin-left:0px !important;}</style>');
			$(".SiteHeader-contentContainer, #body, #footer").css({
				"left" : "20px"
			});
			$(".BodyContent").css({
				"margin-left" : -(integration.custom.FrameSideRight)/2
			});
		} else {
			$(".SiteHeader-contentContainer, #body, #footer").css({
				"margin" : "0 auto",
				"left" : "0",
				"right" : "0"
			});
		}


		$("head").append("<style>.ismHide {display:none !important;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100000"
	});
	$("#RetractableMenu").css({
		"z-index" : "99999"
	});
});
integration.on("layoutChange", function(e) {
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameSide = e.data.plr_FrameSide;
	$("head").append("<style>#pulpix .px-sticky-widget.px-sticky-widget-left{margin-left:" + integration.custom.FrameSide + "px !important;}</style>");
	$(".FacebookPopin.is-visible").css({
		"margin-right" : integration.custom.FrameSideRight + "px"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.InSkinBottomNav = function() {
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		$("#pulpix .px-sticky-widget.px-sticky-widget-left, .px-cleanslate, .px-sticky-widget-wrapper, .px-sticky-widget-wrapper-black").addClass("ismHide");
	} else {
		$("#pulpix .px-sticky-widget.px-sticky-widget-left, .px-cleanslate, .px-sticky-widget-wrapper, .px-sticky-widget-wrapper-black").removeClass("ismHide");
	}
}

/* Passback Tag */
window.ISMPassback = function() {
   return "<script src=\"//static.adserver.pm/position/MARIECLAIRE/RG_NEW/1x1/?click=[CLICK_COMMAND]\"><\\script>";
};

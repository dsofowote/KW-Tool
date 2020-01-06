integration.meta = {
   'sectionID' : '126076',
   'siteName' : 'Radio Times - Tablet - Non UK',
   
   'platform' : 'tablet',
   'restrictions' : ''
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706414',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 980,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('ad-inskin-active');
		var sWidth = $(window).width();
		var sHeight = $(window).height();
		if (sWidth < sHeight) {
			integration.custom.isPortrait = true;
		}
		if (e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
			integration.custom.isEdge = true;
			$(".ad-inskin-active .fluid-container").css({
				"margin-left" : "0px"
			});
			$("head").append("<style>.site-header__inner{margin-top: 0px !important;}");
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
		}
		window.unloadPageskin = function() {
			try {
				integration.destroy();
			} catch (e) {
			}
		};
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.FrameSide = e.data.plr_FrameSide;
	var extraWidth = integration.custom.FrameSideRight + integration.custom.FrameSideRight;
	var newWidth = extraWidth + 980;
	//The site uses a different navigation based on screen width. These are changes to account for both scenarios
	if (integration.custom.isPortrait) {
		$("body").css({
			"padding-top" : integration.custom.FrameTop
		});
		$("head").append("<style>.site-header__inner.is-light {max-width: " + newWidth + "px !important;}");
		integration.base.setCfg({
			"plr_ScrollAdjustment" : -52
		});
	}
	if (integration.custom.isEdge) {
		$("head").append("<style>.nav__primary{margin-left : 0px !important; left: " + integration.custom.FrameSide + "px !important}");
	}
	if (integration.custom.isPortrait && integration.custom.isEdge) {
		var navHeight = $(".site-header__inner.is-light").outerHeight();
		$("head").append("<style>.site-header__inner.is-light {left: 0px !important; position:fixed !important;}");
		$("body").css({
			"padding-top" : navHeight
		});
		integration.base.setCfg({
			"plr_ScrollAdjustment" : 0
		});
	}
});

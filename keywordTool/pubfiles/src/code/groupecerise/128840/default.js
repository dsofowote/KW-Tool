integration.meta = {
    'sectionID' : '128840',
    'siteName' : 'Ohmymag - Tablet - (FR)',
    'platform' : 'tablet'
};

integration.testParams = {
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1037563',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 980,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
      integration.custom.FrameSide = e.data.plr_FrameSide;
      var headHeight = $(".navbar").outerHeight();
      var leftMargin = integration.custom.FrameSide;
      var breadcrumb = $(".breadcrumb").outerHeight();

      $("head").append("<style>.mdc-toolbar--fix {margin-top: 0 ;} .home-slide__bg{background-size: auto !important;}</style>");
  		$(".wrapper").css({
  			"width" : "980px",
  			"margin-left" : "auto",
  			"margin-right" : "auto"
  		});
  		$(".wrapper").css({
  			"margin-top" : "15px"
  		});
  		$(".breadcrumb").css({
  			"margin-top" : breadcrumb
  		});
  		$(".button-share__button").css({
  			"right" : integration.custom.FrameSide
  		});
  		$(".channel-bar").css({
  			"max-width" : "980px",
  			"margin" : "auto",
  			"top" : headHeight
  		});
  		if ($(".navbar").length == 1) {
  			$("<div id='inskinanchor'></div>").insertAfter(".navbar");
  			integration.base.setCfg({
  				plr_AnchorParent : "#inskinanchor",
  			});
  		}
        if( e.data.productType == 'PageSkinEdgeTablet' || e.data.format == 'Pageskin Edge') {
            /* Pageskin Edge specific changes */
            $("head").append("<style>.wrapper{margin-left: 0 !important;}</style>");
            $(".channel-bar").css({"margin-left":0});
            $(".home-slide").css({"margin-left":-20});
            $(".home-content").css({"margin-left":0});
            $(".us-container").css({"margin-left":-300});
            $(".footer").css({"margin-left":-300});
            integration.base.setCfg({ 'plr_PageAlignment' : 'left' });
        }
    }
});
integration.on("adServed", function(e) {
	var headHeight = $(".navbar").outerHeight();
	$(".ism-frame").parent().css({
		"top" : headHeight
	});
	integration.base.setCfg({
		plr_PageHeightAdjustment : -headHeight
	});
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 500);
});

integration.meta = {
	'sectionID' : '127154',
	'siteName' : 'Viral Cham - Mobile - (Asia)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707953',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerwidth = $(".menu-container").width();

		if ($("#page-content-wrapper > div.menu-container").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#page-content-wrapper > div.menu-container");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -68,
			});
		}
		$("#main-search").css({
			"margin-top" : "56px"
		});
		$("#main-mobile-menu").css({
			"margin-top" : "-55px"
		});
		$("#page-content-wrapper").css({
			"transition" : "0.5s"
		});

		$("#at-share-dock").css({
			"max-width" : "calc(100% - 74px)"
		});

		$('#page-inner-wrap, #page-wrap').css({
			'overflow' : 'visible',
			'height' : 'auto'
		});
		
		$(".widget.widget_text").css({
			"margin-left" : "-15px"
		});
		//Aligning MPUs - Appending style due to Infinite Scrolling content
		$("[id*='google_ads_iframe_/21577007/VCH_Article_Top']").addClass('mpuAlign');
		$("head").append("<style>.mpuAlign{margin-left:0px}</style>");
	}
});

integration.on('adServed', function(e) {
	var headerheight = $(".menu-container").outerHeight();
	var wwidth = $(window).width();
	$('#nav-open-btn').click(function() {
		$(".menu-container").css({
			"margin-top" : "-55px",
			"transition" : "0.3s"
		});
		if ($('#page-content-wrapper > div.page-cover.mobile-menu-close').length == 1) {
			$('#page-content-wrapper > div.page-cover.mobile-menu-close').click(function() {
				$(".menu-container").css({
					"margin-top" : "0px"
				});
				$(".header-below").css({
					"margin-top" : "-56px"
				});
				
				$(".ism-frame").parent().css({
					"margin-top" : headerheight
				});

			});
		}
	});

});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.laychange();
	integration.custom.InSkinBottomNav();
	$(window).on('resize', function(){
		integration.custom.laychange();
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.laychange = function() {
	var wwidth = $(window).width();
	$(".menu-container").css({
		"min-width" : wwidth
	});
}

integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
        $("#at-share-dock").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $("#at-share-dock").css({
            "margin-bottom" : "0"
        });
    }
}

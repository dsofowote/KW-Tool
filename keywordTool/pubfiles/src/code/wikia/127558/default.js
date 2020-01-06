integration.meta = {
	'sectionID' : '127558',
	'siteName' : 'Fandom - Desktop - (ASIA)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1500]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '748384',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1240,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".wds-global-navigation-wrapper").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".wds-global-navigation-wrapper");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -55
			});
		}
		$("head").append("<style>.WikiaBarWrapper .wikia-bar-anon{padding-left:0px !important;}</style>");
		if (e.data.productType == "PageSkinSuperWide" || e.data.productType == "PageSkinPlusSuperWide" || e.data.treatment.Superwide) {
			integration.custom.isSuper = true;
		}
		$(".featured-header, .videos-module, #WikiaBar,.WikiaBarWrapper,.WikiaBarWrapper .wikia-bar, .fandom-newsletter-signup, .wds-global-footer, .article-bottom-leaderboard-desktop-wrapper, .recirculation-feed, .hero-block, .index-page-wrapper").css({
			"width" : "1240px",
			"margin" : "0 auto"
		});
		$(".WikiaBarWrapper .wikia-bar").css({
			"margin-left" : "0px"
		});

	}
});


integration.on("layoutChange", function(e) {
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.InSkinBottomNav();
	$( document ).scroll(function() {
			integration.custom.InSkinBottomNav();
	});
});



integration.custom.InSkinBottomNav = function(){
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolltop = $(document).scrollTop();
    if ( docheight - integration.custom.FrameBottom < winheight + scrolltop ) {
        var footermargin = (winheight + scrolltop + integration.custom.FrameBottom ) - docheight;
        $(".WikiaBarWrapper").css({
            "margin-bottom" : footermargin + "px"
        });
    } else {
        $(".WikiaBarWrapper").css({
            "margin-bottom" : "0"
        });
    }
}
integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "11"
	});
});

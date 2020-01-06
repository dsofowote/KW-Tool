integration.meta = {
	'sectionID' : '127465',
	'siteName' : 'VR-Zone - Desktop - (SG)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1350]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '725754',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1090,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
    "plr_StartScrollOnAnchor" : true,
    "plr_ScrollAdjustment" : 55
};

/** Move to-top-of-page button inside PageSkin when overlaps **/
integration.on("layoutChange", function(e) {
    integration.custom.floatingButtons();
    $(window).resize(function() {
        integration.custom.floatingButtons();
    });
});
integration.custom.floatingButtons = function() {
    var width = $(window).width();
    if (width < 1520 || integration.custom.isSuperWide) { /* screen size of when button starts overlapping PageSkin */
        var sideWidth = (width - 1090)/2; /* content width divided by 2 */
        $("#scroll-up").css({
            "right" : sideWidth + 15
        });
    } else {
        $("#scroll-up").css({
            "right" : "15px"
        });
    }
}

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#masthead").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#masthead");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -236
			});
		}
		$('head').append('<style type="text/css">#scroll-up {z-index: 99 !important;}</style>');
		$('head').append('<style type="text/css">#site-navigation {z-index: 101 !important;}</style>');
		$(".dd_outer").css({
			"z-index" : "2"
		});
		$("footer").css({
			"max-width" : "1090px",
			"margin" : "0 auto"
		});
	}
});

/**** Raise Z-index of PageSkin ****/

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "100"
    });
});

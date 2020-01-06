integration.meta = {
    'sectionID' : '129262',
    'siteName' : 'Soya Cincau - Desktop - ( MY )',
    'platform' : 'desktop'
};

integration.testParams = {
    'desktop_resolution' : [1330]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId' : '1069339',
    'plr_PageAlignment' : 'center',
    'plr_ContentW': 1070,
    'plr_ContentType': 'PAGESKINEXPRESS',
    'plr_UseFullVersion': true,
    'plr_UseCreativeSettings': true,
    'plr_HideElementsByID' : '',
    'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".nav-secondary").outerHeight() + $(".site-header").outerHeight() + $("#hero-posts").outerHeight();
		if ($(".nav-secondary").length == 1) {
		            $("<div id='inskinanchor'></div>").insertAfter(".nav-secondary");
		            integration.base.setCfg({
		                plr_AnchorParent : "#inskinanchor",
		                plr_PageHeightAdjustment : -headHeight,
										plr_ScrollAdjustment : -headHeight
		            });
		        }
		$("head").append("<style>html {overflow-x: unset!important}</style>");
		$('#wrapper, .site-inner, .site-footer').css({
			"max-width" : "1050px",
			"margin" : "0 auto",
			"position" : "relative"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
});

integration.custom.floatingButtons = function() {
	var width = $(window).width();
	if (width < 1340 || integration.custom.isSuper) {
		var sideWidth = (width - 1050)/2;
		$(".essb_links").css({"left": sideWidth + 10});
	} else {
		$(".essb_links").css({"left": 0});
	}
}

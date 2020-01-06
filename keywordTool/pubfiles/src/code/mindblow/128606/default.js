integration.meta = {
	'sectionID' : '128606',
	'siteName' : 'Soya Cincau - Desktop - (MY) ',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1026023',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $(".nav-secondary").outerHeight() + $(".site-header").outerHeight();
		if ($(".nav-secondary").length == 1) {
		            $("<div id='inskinanchor'></div>").insertAfter(".nav-secondary");
		            integration.base.setCfg({
		                plr_AnchorParent : "#inskinanchor",
		                plr_PageHeightAdjustment : -headHeight,
										plr_ScrollAdjustment : -headHeight
		            });
		        }
		$("head").append("<style>html {overflow-x: unset!important}</style>");
		$('#wrapper, .wrap, .site-footer').css({
			"max-width" : "980px",
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
		var sideWidth = (width - 985)/2;
		$(".essb_links").css({"left": sideWidth + 10});
	} else {
		$(".essb_links").css({"left": 0});
	}
}

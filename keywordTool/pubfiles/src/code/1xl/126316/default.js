integration.meta = {
	'sectionID' : '126316',
	'siteName' : 'Newsquest (RON) - Smartphone - (UK)',
	'platform' : 'smartphone'
};

integration.testParams = {
};

integration.testParams = {
   'mobile_resolution' : [375]
};


integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '707848',
	'plr_PageAlignment' : '',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : '40',
	'plr_ScrollAdjustment' : 30,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var winwidth = $(window).width();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

		if ($("#header > nav").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header > nav");

			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$("#contentContainer, .header-container, .header-wrapper, .nav-mobile-wrapper.caps").css({
			"max-width" : winwidth - integration.custom.FrameSideRight + "px"
		});
		
		$("#takeover").css({
			"margin-top" : "0px"
		});

		if ($("#header > nav").length == 1) {
			$("#header h1").css({
				"max-width" : winwidth,
				"min-width" : winwidth,
				"margin" : "0 auto"
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laydetect();
	$(window).on('resize', function() {
		integration.custom.laydetect();
	})
});

integration.custom.laydetect = function() {
	var winwidth = $(window).width();
	
	$("#contentContainer, .header-container, .header-wrapper").css({
			"max-width" : winwidth - integration.custom.FrameSideRight + "px"
		});
		$(".ob-widget-items-container").css({
			"max-width" : winwidth + 35 - integration.custom.FrameSideRight + "px"
		});
		$("ul.headlines-list").css({
			"max-width" : winwidth - 40 - integration.custom.FrameSideRight + "px"
		});
		
	if (winwidth > 374) {
		$(".nav-main-wrapper ul li a").css({
			"padding" : "15px 8px"
		});

	} else if (winwidth < 321) {
		$(".nav-main-wrapper ul li a").css({
			"padding" : "15px 4px"
		});
		
	} else {
		$(".nav-main-wrapper ul li a").css({
			"padding" : "15px 10px"
		});
	}

}

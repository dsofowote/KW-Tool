integration.meta = {
	'sectionID' : '126749',
	'siteName' : 'The Fix - Smartphone - (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '707190',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_ShowCloseButton' : true,
	'plr_FixedCloseButton' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('.header-module__inner').height();
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($(".header-netkit").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header-netkit");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -headerHeight
			});
		}

		$('header').next().hide();
		var windowWidth = $(window).width();
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .header-netkit, .inskinLoaded .main-nav{width: ' + windowWidth + 'px}';
		stylesCSS += '.inskinLoaded .layout__takeover{display:none}';
		stylesCSS += 'div._1KsG7rOa{display:none}';
		stylesCSS += '.inskinLoaded .play{top:35%; left:45%}';
		stylesCSS += '.inskinLoaded .nk-header{min-width: 300px !important;}';
		stylesCSS += '.inskinLoaded .advert{margin-left: -16px;}';
		stylesCSS += '.inskinLoaded .plista_widget_mobile_Thefix .itemCategory{bottom:-5px}';
		stylesCSS += '.inskinLoaded #ninemsn-ad-5, .inskinLoaded .container--ads{display:none;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinSidePanel = e.data.plr_FrameSideRight;

	var hh = $(".header-module__inner").outerHeight();
	var bh = hh + integration.custom.PageSkinTopPanel;

	$(window).bind('scroll', function() {
		if ($(window).scrollTop() > bh) {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 40
			});
		} else {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 0
			});
		}
	});

	var windowWidth = $(window).width();
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .header-netkit, .inskinLoaded .main-nav{width: ' + windowWidth + 'px}';
	if ( windowWidth = 320) {
		stylesCSS += '.inskinLoaded div.story-media-container.enableAutoplay a, .inskinLoaded .story-content-container{width:100%}';
	}
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
});

integration.on("adClose", function(e) {
	$("body").removeClass("inskinLoaded");
});

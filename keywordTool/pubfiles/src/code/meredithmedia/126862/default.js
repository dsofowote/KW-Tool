integration.meta = {
	'sectionID' : '126862',
	'siteName' : ' Fitness - Desktop - (INT)',
	'platform' : 'desktop'
};

integration.telemetry.setup({
	'keywords' : true,
	'url' : true,
	'ad-served' : true,
	'base-ready' : true,
	'ad-call-response' : true,
	'ad-call' : true,
	'failed-test' : true,
	'impression' : true,
	'custom' : true
});

integration.testParams = {
	/* No Screen Resolution check */
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707798',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1280,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : 55,
	'plr_AnchorParent' : "#content-container"
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {

		/* Add a spacer pixel to the bottom of the content (for content using float positioning) */
		integration._addPixel();
		$("#ismIMG").css({
			"height" : "1px",
			"max-height" : "1px",
			"min-height" : "1px"
		});
		
		var ismHeaderHeight = $('#header-container').height();
		var ismAnchorTop = ismHeaderHeight + $('#header-banner-container').height() + $('#block-menu-menu-submenu-workouts > div > ul').height();

		$('#inskinanchor').css({
			'margin-top' : ismAnchorTop + 'px'
		});

		$("#pre-footer-container").css({
			"max-width" : "1280px",
			"margin" : "0 auto",
			"right" : "0",
			"left" : "0"
		});
		$("#footer-container").css({
			"max-width" : "1280px"
		});
		$('#main-container').css({
			'margin-left' : '5px'
		});
		$('#sidebar-second, #main-well').css({
			'margin-top' : '5px'
		});

		$('head').append('<style type="text/css">#yb_minibar_component_1 {width:436px !important;} </style>');
		$('head').append('<style type="text/css">#yb_minibar_inner, #yb_minibar_ctn{margin-left: auto !important; margin-right: auto !important; right: 0 !important; left: 0 !important; width:1280px !important}  #yb_minibar_ctn * {right: 0;}</style>');
		// Force the bottom sticky bar to be centered

		$('#header-container, #header-banner-container').css({
			'z-index' : '9999999'
		});
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.floatingButtons();
	$(window).resize(function() {
		integration.custom.floatingButtons();
	});
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinBottomNav();
	$(document).scroll(function() {
		integration.custom.InSkinBottomNav();
	});
});

integration.custom.floatingButtons = function() {
	// Used to move the footer section inside PageSkin
	var width = $(window).width();
	var sideWidth = (width - 1280) / 2;
	if (width > 1280) {
		$("#footer-container").css({
			"left" : sideWidth
		});
	} else {
		$("#footer-container").css({
			"left" : "0"
		});
	}
}

integration.custom.InSkinBottomNav = function() {
	//Move the bottom sticky bar inside PageSkin
	var docheight = $(document).height();
	var winheight = $(window).height();
	var scrolltop = $(document).scrollTop();
	if (docheight - integration.custom.PageSkinTopPanel < winheight + scrolltop) {
		var footermargin = (winheight + scrolltop + integration.custom.PageSkinTopPanel ) - docheight;
		$("#yb_minibar_inner").css({
			"margin-bottom" : footermargin + "px"
		});
	} else {
		$("#yb_minibar_inner").css({
			"margin-bottom" : "0"
		});
	}
}

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "99999",
		"margin-left" : "-10px"
	});
});


integration.meta = {
	'sectionID' : '126036',
	'siteName' : 'Weatherzone',
	
	'platform' : 'desktop',
	'restrictions' : ''
};


integration.testParams = {
	'desktop_resolution' : [1260]
};

integration.flaggedTests = [];

integration.params = {
	'plr_ComscoreDevice' : 'desktop',
	'mf_siteId' : '706467',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1000,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("body > .footer").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
	}
});
/**** Add / remove class to sticky header ****/
integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.PageSkinLeftPanel = e.data.plr_FrameSide;
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	var negativePageSkinTop = 0 - integration.custom.PageSkinTopPanel;
	var backgroundSize = 1000 + integration.custom.PageSkinLeftPanel + integration.custom.PageSkinRightPanel;
	$("body").css({
		"background-size" : backgroundSize + "px auto",
		"padding-left" : "0"
	});
	$("head").append('<style> .inSkinHeader {position : absolute !important; top : 105px !important;} </style>');
	$("body").prepend($(".network-strip"));
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	$("#box-network").css({
		"margin-top" : negativePageSkinTop
	});
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel + 105) {
		$('#header > .navbar').addClass('inSkinHeader');
	} else {
		$('#header > .navbar').removeClass('inSkinHeader');
	}
}



integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($(".header-wrap > .navigation").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header-wrap > .navigation");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : 0,
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 60 
			});
			$("head").append("<style>.outer-wrap{max-width:1000px !important; margin: 0 auto !important;}</style>");
		}
		if ($(".navigation").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".navigation");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : 0,
				"plr_StartScrollOnAnchor" : true,
				"plr_ScrollAdjustment" : 60 
			});
			$("head").append("<style>.outer-wrap{max-width:1000px !important; margin: 0 auto !important;}</style>");
		}
	}
});

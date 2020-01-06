integration.meta = {
	'sectionID' : '126114',
	'siteName' : 'InSing - Smartphone - (INT)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706820',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($("#page-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#page-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -64,
			});
		}
		$("body").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #page-header{position:relative !important}';
		stylesCSS += 'body.inskinLoaded{padding-top:0px}';
		stylesCSS += '.inskinLoaded #top-carousel > div.owl-wrapper-outer > div > div > div > div.caption{width:70%;}';
		stylesCSS += '.inskinLoaded #top-carousel > div.owl-wrapper-outer > div > div > div > div.caption > p{width:100%}';
		stylesCSS += '.inskinLoaded #page-container > div > div.module-grid-list.hgw-deal.container > div.header > a{bottom:38px}';
		stylesCSS += '.inskinLoaded .module-movie-list-four.movies-now-showing.container{padding-left: 1px; padding-right: 1px;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100",
		"margin-top" : "64px"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.PageSkinSidePanel = e.data.plr_FrameSide;
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;

	integration.custom.ismResize();
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.ismResize();
		integration.custom.laychange();
	});

	$("head").append("<style>.inskinLoaded #search-header{margin-top: " + integration.custom.PageSkinTopPanel + "px; max-height:calc(100% - " + integration.custom.PageSkinTopPanel + "px);}</style>");
});

integration.custom.ismResize = function() {
	var windowWidth = $(window).width();
	var contentWidth = windowWidth - integration.custom.FrameSideRight;
	$("head").append("<style>.inskinLoaded #page-header{position: fixed !important; z-index: 101;}</style>");
}

integration.on('adClose', function(e) {
	$("body").removeClass("inskinLoaded");
	$("#inskinanchor").remove();
});
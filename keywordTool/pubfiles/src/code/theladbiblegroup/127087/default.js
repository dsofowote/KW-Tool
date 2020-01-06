integration.meta = {
	'sectionID' : '127087',
	'siteName' : 'The Ladbible - Smartphone - UK',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'html.inskinLoaded, .inskinLoaded body{overflow: visible;}';
		stylesCSS += 'html.inskinLoaded{padding: 0 !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		var stylesCSS2 = '<style type="text/css" id="ismNavList">';
		stylesCSS2 += '</style>';
		$('head').append(stylesCSS2);
	}
});

integration.on("layoutChange", function(e) {
	/* Prevent Nav bar from being hidden when menu opens*/
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.PageSkinRightPanel = e.data.plr_FrameSideRight;
	var headerHeight = $("header").outerHeight();
	var menuToggled = true;

	$(".header__nav").click(function() {
		if (menuToggled) {
			$("#ismNavList").html(".inskinLoaded ul.nav__list{margin-top: " + integration.custom.FrameTop + "px;} .inskinLoaded .header--hubs .nav__wrapper{top: 100px;}");
			menuToggled = true;
		} else {
			$("#ismNavList").html(".inskinLoaded ul.nav__list{margin-top: 0px;}");
			menuToggled = false;
		}
	});

	$("head").append("<style>.inskinLoaded body, .inskinLoaded .header__more-nav--active {width: calc(100% - " + integration.custom.PageSkinRightPanel + "px) !important;}</style>");

	$(".nav__toggle").on("click", function() {
		setTimeout(function() {
			if ($("html").hasClass("scroll-lock")) {
				integration.base.hideAd();
				$('html').removeClass('inskinLoaded');
			} else {
				integration.base.showAd();
				$('html').addClass('inskinLoaded');
			}
		}, 100);
	});
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

/*
integration.custom.ismNavToggle = function() {

}
*/
integration.meta = {
	'sectionID' : '128011',
	'siteName' : 'Sky Sports - Smartphone - (UK) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '965954',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_StartScrollOnAnchor' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if ($(".site-header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".site-header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -58
			});
		}
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded, .inskinLoaded .page-body{overflow: visible;}';
		stylesCSS += '.inskinLoaded .grid.site-layout-primary{overflow: hidden;}';
		stylesCSS += '.inskinLoaded .advert--banner-wrap-ghost {display: none;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
	$("head").append("<style>.inskinLoaded .ismSideNavOpen{overflow: visible !important;}</style>");
});

integration.on('layoutChange', function(e) {
	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});
	integration.custom.ismSideNav();
	$(document).on("click touchstart", function() {
		integration.custom.ismSideNav();
	});
});

integration.custom.ismResize = function() {
	width = $(window).width();
	$("head").append("<style>.inskinLoaded .site-header{width: " + width + "px;}</style>");
}

integration.custom.ismSideNav = function() {
	setTimeout(function() {
		if ($(".inskinLoaded .grid__col.site-layout-primary__col2[style='visibility: visible;']").length == 1) {
			$(".grid.site-layout-primary").addClass("ismSideNavOpen");
		} else {
			$(".grid.site-layout-primary").removeClass("ismSideNavOpen");
		}
	}, 100);
}

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
	$(".grid__col.site-layout-primary__col2").removeClass("ismSideNavOpen");
});

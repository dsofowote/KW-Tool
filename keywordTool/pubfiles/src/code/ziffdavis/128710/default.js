integration.meta = {
	'sectionID' : '128710',
	'siteName' : 'Mashable - Smartphone - ( UK )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1031983',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headerHeight = $('#sticky').height();
		integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
		if ($("#sticky").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#sticky");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment : -65,
				plr_StartScrollOnAnchor : true
			})
		}
		$("html").addClass("inskinLoaded");
		var stylesCSS = '<style type="text/css">';
		stylesCSS += ".inskinLoaded #inskinanchor{margin-top: " + headerHeight + "px; position: relative;}";
		stylesCSS += ".inskinLoaded #_evh-link{right: " + integration.custom.FrameSideRight + "px !important;}";
		stylesCSS += ".inskinLoaded #scrollable{padding-top: 0 !important;}";
		stylesCSS += ".inskinLoaded body{min-width: 300px !important;}";
		stylesCSS += "@media only screen and (max-width: 375px) {.inskinLoaded #main{min-width: 300px !important;}}";
		stylesCSS += "</style>";
		$("head").append(stylesCSS)
	}
});

integration.on("adClose", function(e) {
	$("html").removeClass("inskinLoaded")
});

integration.on('layoutChange', function(e) {
	$(window).on('scroll', function() {
		if ($('.column-headers').length == 1) {
			//Applied after user scrolls down by 50px
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 78
			});
		} else {
			integration.base.setCfg({
				'plr_ScrollAdjustment' : 45
			});
		}
	});
});

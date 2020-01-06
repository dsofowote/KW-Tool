integration.meta = {
	'sectionID' : '127655',
	'siteName' : 'Tageblatt - Smartphone - ( LU )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '776576',
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

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		if ($("#td-outer-wrap").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore("#td-outer-wrap");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -55
			});
		}
	}
});

integration.on('adServed', function(e) {
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	$('body').addClass('inskinLoaded');
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded #td-mobile-nav{width: calc(100% + ' + integration.custom.FrameSideRight + 'px)} .inskinLoaded .td-sub-footer-container{margin-bottom: 30px;} .inskinLoaded #logo-cim{bottom: 75px !important;}';
	stylesCSS += '@media screen and (max-width: 320px) {.inskinLoaded .search_1{width: 220px !important;} .inskinLoaded .td-main-menu-logo img{margin-left: 45px !important;} .inskinLoaded #td-top-mobile-toggle i{width: 45px;}}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 100);
}); 
integration.meta = {
	'sectionID' : '128437',
	'siteName' : 'Headline Daily - Smartphone - ( HK )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1013414',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_AnchorParent' : '.mobile-body-scrollable-content',
	'plr_ScrollElement' : ".mobile-body-scrollable-content",
	'plr_GetContentHeightVersion' : 2
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var windowWidth = $(window).width();
		var mainHeight = $(".mobile-body-scrollable-content > .main").outerHeight();
		var headHeight = $(".header").outerHeight();
		var footHeight = $("#footer").outerHeight();

		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'html.inskinLoaded, .inskinLoaded body{overflow:hidden;position:absolute;height:100vh;}';
		stylesCSS += '.inskinLoaded .body-wrapper{min-width:' + windowWidth + 'px;height:' + mainHeight + 'px;}';
		stylesCSS += 'inskinLoaded .body-content, .inskinLoaded .mobile-body-wrapper, .inskinLoaded .mobile-body-scrollable{position:relative;overflow:visible;}';
		stylesCSS += '.inskinLoaded .mobile-body-scrollable-content{overflow-y:scroll;padding-right:75px;height:100vh;overflow-x:hidden;transform:translateX(0);transition: transform .6s,-webkit-transform .6s;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);

		integration.base.setCfg({
			plr_PageHeightAdjustment : -headHeight
		});
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});


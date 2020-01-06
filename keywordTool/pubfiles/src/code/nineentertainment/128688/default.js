integration.meta = {
	'sectionID' : '128688',
	'siteName' : '	9 The Fix- (Pagelead) - Smartphone - (AU)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1030057',
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
		var headerHeight = $("#page > div > nav:first").outerHeight();
		if ($("#page > div > nav:first").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#page > div > nav:first");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				'plr_PageHeightAdjustment' : -headerHeight
			});
		}
		$('html').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #inskinanchor{margin-top: ' + headerHeight + 'px !important;}';
		stylesCSS += '.inskinLoaded ._1XYkVhyU{z-index: 999999 !important;}';
		stylesCSS += ".inskinLoaded .ism-frame:nth-of-type(2){z-index: 30001 !important;}";
		stylesCSS += '._1KsG7rOa, ._1KsG7rOa #ninemsn-ad-5{display: none !important;}';
		stylesCSS += '.Header__SiteNav-b5cu1y-1{padding: 0 !important;}';
		stylesCSS += '.ism-frame{z-index: 1000 !important;}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('html').removeClass('inskinLoaded');
});

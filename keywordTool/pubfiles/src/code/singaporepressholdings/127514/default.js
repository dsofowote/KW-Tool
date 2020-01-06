integration.meta = {
	'sectionID' : '127514',
	'siteName' : 'Torque - (CREATIVE APPROVAL) - Smartphone - (SG)',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '733367',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -10,
	'plr_FixedCloseButton' : true,
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		try {
			jQuery(window).trigger("resize");
		} catch (e) {
		};
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += 'body.inskinLoaded {padding-right: 0 !important;}'; // Needed to prevent interstitial to break the layout.
		stylesCSS += '.inskinLoaded .mobile-padding, .inskinLoaded #container{padding: 0 !important;} .inskinLoaded #notifications{right: 74px !important; z-index: 1 !important;}';
		stylesCSS += '</style>'
		$('head').append(stylesCSS);
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	try {
		jQuery(window).trigger("resize");
	} catch (e) {
	};
});

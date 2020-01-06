integration.meta = {
	'sectionID' : '127920',
	'siteName' : 'Game Axis - (Creative Approval) - Smartphone - ( SG )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [375]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '973886',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -20,
	'plr_FixedCloseButton' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		setTimeout(function() {
			window.dispatchEvent(new Event('resize'));
		}, 100);
	}
});

integration.on('adServed', function(e) {
	$('.ism-frame').parent().css({
		"z-index" : "9999"
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	var stylesCSS = '<style type="text/css">';
	stylesCSS += '.inskinLoaded .wpo-topbar .topbar-mobile ul li.dropdown .dropdown-menu{width: 65vw !important;}';
	stylesCSS += '.inskinLoaded div[id*="google_ads_iframe"]{margin-left: -15px !important;}';
	stylesCSS += '@media screen and (max-width: 375px) {.inskinLoaded #wpo-content{padding: 0 !important; margin: 0 !important;}}';
	stylesCSS += '@media screen and (max-width: 375px) {.inskinLoaded .entry-content{padding: 5px 15px !important;}}';
	stylesCSS += '</style>';
	$('head').append(stylesCSS);
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
	setTimeout(function() {
		window.dispatchEvent(new Event('resize'));
	}, 250);
});


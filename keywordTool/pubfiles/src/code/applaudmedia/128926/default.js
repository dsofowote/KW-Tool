integration.meta = {
	'sectionID' : '128926',
	'siteName' : 'LoveProperty - Smartphone - (UK) ',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
	'mf_siteId' : '1042557',
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
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded .captify-iframe-button-right{right: 64px !important;}';
		stylesCSS += '@media only screen and (max-width: 375px) {.inskinLoaded .island{padding: 10px !important;}}';
		stylesCSS += '@media only screen and (max-width: 340px) {.inskinLoaded .lm-header__brand{padding-left: 5px !important;}}';
		stylesCSS += '@media only screen and (max-width: 340px) {.inskinLoaded .menu-btn{padding: 25px 22px !important;}}';
		stylesCSS += '</style>';
		$('head').append(stylesCSS);
	}

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.base.setCfg({
			'plr_FixedTop' : true,
			'plr_EnableSwipe' : true
		});
	}
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://uk.ads.justpremium.com/adserve/js.php?zone=49373\"><\\script>";
};

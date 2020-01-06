integration.meta = {
	'sectionID' : '128901',
	'siteName' : 'Who What Wear - Smartphone - ( AU )',
	'platform' : 'smartphone'
};

integration.testParams = {
	'mobile_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '1040965',
	'plr_FluidAnchor' : true,
	'plr_Fluid' : true,
	'plr_Responsive' : true,
	'plr_ShowCloseButton' : true,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_ForceFrameBottom' : 0
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$('body').addClass('inskinLoaded');
		var stylesCSS = '<style type="text/css">';
		stylesCSS += '.inskinLoaded #main-container{z-index:199}';
		stylesCSS += '#adspot-320x50-pos1{display: none !important;}';
		stylesCSS += '.inskinLoaded #main-menu{z-index:203;}';
		stylesCSS += '.inskinLoaded header.navbar{z-index:200;}';
		stylesCSS += '.inskinLoaded.stop-scroll header.navbar{z-index:205;}';
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

integration.on('adServed', function(e) {
	$(".ism-frame").css({
		"z-index" : "201"
	})
});

integration.on('adClose', function(e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/1027487/mobile-whowhatwear', [320, 50]).display();\n<\\script>";
};
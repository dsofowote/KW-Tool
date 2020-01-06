integration.meta = {
	'sectionID': '128904',
	'siteName': 'Gizmodo - Smartphone - ( AU )',
	'platform': 'smartphone'
};

integration.testParams = {
	'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '1040968',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_Responsive': true,
	'plr_ShowCloseButton': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_ForceFrameBottom': 0
};


integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .site-header {top: 0px}';
        stylesCSS += '</style>'
        $('head').append(stylesCSS);
    }

    if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
        integration.base.setCfg({'plr_FixedTop' : true, 'plr_EnableSwipe' : true});
    }
});

integration.on("adServed", function(e) {
	$('head').append('<style type="text/css">.ism-anchor, .ism-close, .ism-indicator {top : 62px !important;}</style>');
	$('head').append('<style type="text/css">.ism-frame:nth-of-type(1) {top : unset !important;}</style>');
	$(".ism-anchor").css({"z-index" : "9999999999"});
	$('.navbar-toggle').on('click', function() {
		$('.site-header').toggleClass('opened');
	});
	$('head').append('<style type="text/css">.opened {z-index : 99999999999 !important;}</style>');

});

integration.on('adClose', function(e) {
    $('body').removeClass('inskinLoaded');
});


/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/1027487/mobile-gizmodo', [320, 50]).display();\n<\\script>";
};

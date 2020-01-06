integration.meta = {
    'sectionID': '128898',
    'siteName': 'Lifehacker - Smartphone - ( AU )',
    'platform': 'smartphone'
};

integration.testParams = {
    'mobile_resolution': [0]
};

integration.flaggedTests = [];

integration.params = {
    'mf_siteId': '1040962',
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

integration.on('adCallResult', function (e) {
    if (e.data.hasSkin) {
        $('body').addClass('inskinLoaded');
        var stylesCSS = '<style type="text/css">';
        stylesCSS += '.inskinLoaded .ad.mobile-leaderboard{display: none !important;}';
        stylesCSS += '.inskinLoaded header .site-header{z-index: 9999 !important;top:0px}';
        stylesCSS += '.inskinLoaded .tbl-read-more-box{z-index:2}';
        stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(1){z-index:5 !important;}';
        stylesCSS += '</style>';
        $('head').append(stylesCSS);
    }

	if (e.data.format == 'Pagelead' || e.data.format == 'Pagelead Video') {
		integration.custom.headHeight = $("header .site-header").outerHeight();
		integration.custom.socialHeight = $(".meta__social").outerHeight();
    integration.custom.indicatorPos = $(".site-header").outerHeight();
    integration.custom.closePos = $(".site-header").outerHeight();
		if ($(".meta__social").css("z-index") === "101"){
			integration.custom.pl_initState = integration.custom.socialHeight;
		} else {
			integration.custom.pl_initState = integration.custom.headHeight;
		}
		integration.base.setCfg({
			'plr_FixedTop': true,
			'plr_EnableSwipe': true
		});
	}
});

integration.on('layoutChange', function (e) {
	integration.custom.pl_behaviour = "property";
	integration.custom.pl_class = ".meta__social";
	integration.custom.elProperty = "display";
	integration.custom.elValue = "flex";

	var articlePage = $(".article-pagetype");
	if (articlePage) {
		integration.custom.pl_scrollState1 = integration.custom.socialHeight;
		integration.custom.pl_scrollState2 = integration.custom.headHeight;
	} else {
		integration.custom.pl_scrollState1 = 0;
		integration.custom.pl_scrollState2 = 0;
	}
});

integration.on('pagelead:layoutChange', function (e) {
	if (e.data.fixedTop == false) {
		integration.custom.pl_behaviour = "n/a";
		newValue = '.inskinLoaded .ism-frame:nth-of-type(1){margin-top:' + integration.custom.headHeight + 'px !important;}.inskinLoaded .site-header--fixed{top:0px}';
		$("#inskinPL").html(newValue);
	}
});

integration.on('adClose', function (e) {
	integration.custom.pl_behaviour = "n/a";
	$('body').removeClass('inskinLoaded');
	$("#inskinanchor").remove();
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/1027487/mobile-lifehacker', [320, 50]).display();\n<\\script>";
};

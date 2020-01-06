integration.meta = {
	'sectionID': '126339',
	'siteName': 'Entertainment Daily - Smartphone - (UK)',
	'platform': 'smartphone'
};

integration.channelHome = ['/', 'news/', 'tv/', 'real-life/', 'style/', 'quizzes-polls/', 'video/'];

integration.testParams = {};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId': '708135',
	'plr_PageAlignment': '',
	'plr_FluidAnchor': true,
	'plr_Fluid': true,
	'plr_ContentType': 'PAGESKINEXPRESS',
	'plr_UseFullVersion': true,
	'plr_UseCreativeSettings': true,
	'plr_HideElementsByID': '',
	'plr_HideElementsByClass': '',
	'plr_Responsive': true,
	'plr_ShowCloseButton': true,
	"plr_FastInit": true,
	'plr_PageScanExclude': ' #nav, .footer, .sidebar, #ad-articlefooter, script, .article__footer, .trending-articles'
	// "plr_PageScanExclude" : ".sidebar, #ad-articlefooter, script"
};

integration.on('adCallResult', function (e) {
	if (e.data.hasSkin) {
		if (e.data.format == "Pagelead" || e.data.format == "Pagelead Video") {
			//integration.custom.pl_initState = 20;
			//integration.custom.pl_behaviour = ""
		} else {
			var headerHeight = $('.header').outerHeight();
			integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
			integration.custom.FrameTop = e.data.plr_FrameTop + headerHeight;
			$("body").addClass("inskinLoaded");
			var stylesCSS = '<style id="inskinStyles" type="text/css">';
			stylesCSS += '.inskinLoaded #main_feature_image a img{min-height:auto}';
			stylesCSS += '.inskinLoaded .ism-frame:nth-of-type(3){z-index: 16777272 !important}';
			stylesCSS += '.inskinLoaded #tbl-next-up{display:none !important}';
			stylesCSS += '.inskinLoaded .nav.is-open{top: ' + integration.custom.FrameTop + 'px !important; right: ' + integration.custom.FrameSideRight + 'px !important;}';
			stylesCSS += '.inskinLoaded ._3zEEtS_0KXn3fBbZiqO5nS{ right: ' + integration.custom.FrameSideRight + 'px !important;}';
			stylesCSS += '</style>';
			$('head').append(stylesCSS);
		}
	}
});

integration.on('adClose', function (e) {
	$('body').removeClass('inskinLoaded');
});

/* Passback Tag */
window.ISMPassback = function () {
	return "<script type='text/javascript' src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/108455924/EDUK_SKIN1X1_PASSBACK_A', [1, 1]).display();\n<\\script>";
};
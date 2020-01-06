integration.meta = {
	'sectionID' : '127944',
	'siteName' : ' Free Ads - Desktop - (UK)',
	'platform' : 'desktop'
};

//for escaping iframe
function setWindow() {
	return currentWindow.top;
  }

integration.testParams = {
	'desktop_resolution' : [1310]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '953709',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1050,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		var headHeight = $('#header').height();
		$("head").append('<style>#_main_container .main_section > div.fa_700{display: none !important;}</style>');
		$("footer > div > .container").css({
			"max-width" : "1030px"
		});
		$("footer").css({
			"max-width" : "1050px",
			"margin" : "auto"
		});
		if ($("#header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
				plr_PageHeightAdjustment: - headHeight,
				plr_ScrollAdjustment: -headHeight,
			});
		};
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameTop = e.data.plr_FrameTop;
	integration.custom.FrameBottom = e.data.plr_FrameBottom;
	integration.custom.ismResize();
	$(window).on("resize", function() {
		integration.custom.ismResize();
	});
});

integration.custom.ismResize = function() {
	var width = $(window).width();
	if ($(window).width() < 1000) {
		$(".footer .col_fix, .footer .col_last").css({
			"max-width" : "inherit",
			"margin-right" : "inherit"
		});

		$(".footer .col_fix.socials").css({
			"max-width" : "inherit"
		});

		$(".footer .col_left").css({
			"max-width" : "inherit"
		});

		$(".footer .col_right").css({
			"max-width" : "inherit"
		});
	} else {
		$(".nav_main .nav li a").css({
			"padding" : "0px 28px"
		});

		$(".footer .col_fix, .footer .col_last").css({
			"max-width" : "180px",
			"margin-right" : "20px"
		});

		$(".footer .col_fix.socials").css({
			"max-width" : "302px"
		});

		$(".footer .col_left").css({
			"max-width" : "39%"
		});

		$(".footer .col_right").css({
			"max-width" : "61%"
		});
	}
};
/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/306025875/Inskin_Desktop_Passback', [970, 250]).setTargeting('desktopskin', ['true']).display();\n<\\script>";
};

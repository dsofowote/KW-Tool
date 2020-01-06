integration.meta = {
	'sectionID' : '127162',
	'siteName' : 'Lovin.ie-Desktop-(IE)',
	'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707881',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_PageHeightAdjustment' : -60,
	'plr_URLKeywords' : 2
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".l-site").css({
			"max-width" : "1100px",
			"margin" : "0 auto",
			"padding-top" : "0px"
		});
		if ($(".header").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter(".header");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}

		$(".c-hero").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
	}
});

integration.on('adServed', function(e) {
	var headheight = $('.header').outerHeight();
	$("#inskinanchor").css({
		"margin-top" : headheight
	});
});

integration.on('layoutChange', function(e) {
	integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
	integration.custom.laychange();
	$(window).on('resize', function() {
		integration.custom.laychange();
	});
});
/* Right-Widget outside of PageSkin
 integration.custom.laychange = function() {
 var wwidth = $(window).width();
 var cwidth = wwidth - (1100 + integration.custom.FrameSideRight);
 var swidth = cwidth / 2;
 if (swidth > 200) {
 var rowcss = "<style>.sidebar{display:block;right:0;max-width:"
 rowcss += swidth - 67;
 rowcss += "px !important}</style>";

 $("head").append(rowcss);
 } else {
 $("head").append("<style>.sidebar{display:none}</style>");
 }
 } */

/* Passback Tag */
window.ISMPassback = function() {
	return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n  googletag.pubads().definePassback('/85456319/LovinDotIE_Landing_Leaderboard', [[970, 250], [728, 90], [970, 90]]).display();\n<\\script>";
}; 
integration.meta = {
   'sectionID' : '127334',
   'siteName' : 'CNBC - (PUBLISHER BOOKING) - Desktop - (UK)',
   'platform' : 'desktop'
};




integration.testParams = {
	'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
	
	'mf_siteId' : '709940',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1010,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($(".cnbc-body ").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".cnbc-body");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
		$(".mps-slot").hide();
		
		$(".story-header-left.twoCol").css({
			"max-width" : "1010px",
			"margin" : "0 auto"
		});
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.BottomFrame = e.data.plr_FrameBottom;
	$("head").append("<style>.cnbc-new-footer-res{margin-top: " + integration.custom.BottomFrame + "px}</style>");
	integration.custom.AboveFooter();
	$(window).resize(function() {
		integration.custom.AboveFooter();
	});
	$(window).on("scroll", function() {
		integration.custom.AboveFooter();
	});
});

integration.custom.AboveFooter = function() {
	var footerHeight = $(".cnbc-new-footer-res").height();
	var headerHeight = $("#inskinanchor").offset().top;
	var adjustment = 0 - headerHeight - footerHeight - integration.custom.BottomFrame;
	integration.base.setCfg({
		'plr_PageHeightAdjustment' : adjustment
	});
}
/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\">\n  var ord = window.ord || Math.floor(Math.random() * 1e16);\n  document.write('<script type=\"text/javascript\" src=\"http://ad.doubleclick.net/N2620/adj/nbcu.pass/cnbc_pubmaticuk_passback;site=cnbc;sz=728x90;ord=' + ord + '?\"><\\/script>');\n<\\script>\n<noscript>\n<a href=\"http://ad.doubleclick.net/N2620/jump/nbcu.pass/cnbc_pubmaticuk_passback;site=cnbc;sz=728x90;ord=[timestamp]?\">\n<img src=\"http://ad.doubleclick.net/N2620/ad/nbcu.pass/cnbc_pubmaticuk_passback;site=cnbc;sz=728x90;ord=[timestamp]?\" width=\"728\" height=\"90\" />\n</a>\n</noscript>";
}; 
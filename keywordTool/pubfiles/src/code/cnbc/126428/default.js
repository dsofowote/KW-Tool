integration.meta = {
	'sectionID' : '126428',
	'siteName' : 'CNBC AU',
	
	'platform' : 'desktop',
	'restrictions' : ''
};




integration.testParams = {
	'desktop_resolution' : [1230]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '707852',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1010,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		/* If statement is very important. If element does not exist PageSkin will not display at all. */
		if ($(".cnbc-body ").length == 1) {
			$("<div id='inskinanchor'></div>").insertBefore(".cnbc-body ");
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor"
			});
		}
	}
});

integration.on('layoutChange', function(e) {
	integration.custom.BottomFrame = e.data.plr_FrameBottom;
	$("head").append("<style>.cnbc-new-footer-res{margin-top: " + integration.custom.BottomFrame + "px}</style>");
	integration.custom.AboveFooter();
	$(window).resize(function(){
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
integration.meta = {
	'sectionID' : '126259',
	'siteName' : 'CNBC - Desktop - (UK)',
	'platform' : 'desktop'
};

integration.testParams = {
	'desktop_resolution' : [integration.custom.res]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '708146',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1295,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : '',
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 1
};

var headHeight;

integration.on('adCallResult', function(e) {
    if (e.data.hasSkin) {
		// for makeit
		if ($("#MakeItGlobalNavigation").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#MakeItGlobalNavigation");
			integration.base.setCfg({
                plr_AnchorParent : "#inskinanchor"
			});
		}
		//for cnbc
		if ($("#GlobalNavigation").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#GlobalNavigation");
			var adjustment = $(".GlobalNavigation-globalNavigationSticky").outerHeight();
			integration.base.setCfg({
				plr_AnchorParent : "#inskinanchor",
			});
		}
			$("#MainContent, .Footer-container, .FeaturedBreaker-slideContainer").css({"margin": "0 auto", "max-width": "1290px"});
			$("[id*='MakeItHomepage'], [id*='MakeItRegularArticle'], [id*='makeItNews'], [id*='MakeItSection']").css({"max-width": "1290px"});
			$(".Footer-gridContainer").css({"padding": "0 10px"});
			$("#standalone-header").parent().css({"top": "0", "position": "absolute"});
			$(".TopBanner-container, #dart_wrapper_topbanner").css({"display": "none"});
    }
});

integration.on('adServed', function(e) {
	if ($("#MakeItGlobalNavigation").length == 1) {
		var headerTop = $("#MakeItGlobalNavigation").outerHeight();
		$("#inskinanchor").css({"margin-top": headerTop});
	} else {
		var headHeight = $(".GlobalNavigation-container").outerHeight();
		$("#inskinanchor").css({"margin-top": headHeight});
	};
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script src='https://www.googletagservices.com/tag/js/gpt.js'>\ngoogletag.pubads().definePassback('/259619298/newpassback728X90',\n[[728,90]])           \n.setClickUrl('%%CLICK_URL_UNESC%%')   \n.display();\n<\\script>";
};

integration.meta = {
	"sectionID" : "124437",
	"siteName" : "Digital Spy",
	"publisher" : "hearst",
	"platform" : "tablet"
};




window.ISMPassback = function() {
	return ("<script type=\"text/javascript\" src=\"http://www.natmagnewsletters.co.uk/indirect/js/inskinrubiconreturndstab.js\"><\\script>");
};

integration.testParams = {};

integration.params = {
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1100,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_URLKeywords" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		/* Hiding leaderboard space*/
		$(".leaderboard.with-bg").hide();
		$(".DS-BetaOptin-wrapper").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		$(".ad-gpt-breaker, .leaderboard").css({
			"margin" : "0 auto"
		});
		$("html").css({
			"overflow-x" : "visible"
		});
		/* Fix for side navigation */
		$(".nav--open-panel").click(function() {
			$(".ism-frame").parent().toggleClass("ismClicked");
		});
		$(".nav-panel--close").bind("click touchstart", function() {
			$(".ism-frame").parent().removeClass("ismClicked");
		});
		/* End of fix for side navigation */
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			integration.base.setCfg({
				plr_PageAlignment : 'left'
			});
			$("#site-wrapper, #sticky-wrap > .nav").css({
				"max-width" : "1100px"

			});
			$(".DS-BetaOptin-wrapper").css({
				"margin-left" : "0px"
			});
			$('head').append("<style>.landing-feed-alternative-container .landing-feed-alternative-headers--placeholder .landing-feed-alternative-headers.sticky{margin-left:20px;max-width:1100px;margin-top:0px !important;}.nav.sticky{position : absolute !important; top : auto; margin-left: 0px;}.ismClicked{transform : translate(250px, 0px);transition: transform 0.3s ease 0s;-webkit-transform : translate(250px, 0px); -webkit-transition: transform 0.3s ease 0s;}</style>");
		} else {
			$('head').append("<style>.landing-feed-alternative-container .landing-feed-alternative-headers--placeholder .landing-feed-alternative-headers.sticky{max-width:1100px;margin-top:0px !important;margin-left:auto;margin-right:auto;right:0;}.nav.sticky{position : absolute !important; top : auto;}.ismClicked{transform : translate(170px, 0px);transition: transform 0.3s ease 0s;-webkit-transform : translate(170px, 0px); -webkit-transition: transform 0.3s ease 0s;}</style>");
			$("#site-wrapper, #sticky-wrap > .nav").css({
				"max-width" : "1100px",
				"margin" : "0 auto"
			});
		}
	}
});

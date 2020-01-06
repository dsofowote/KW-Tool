integration.meta = {
	"sectionID" : "125658",
	"siteName" : "Channel 5",
	"publisher" : "channel5",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {


	'mf_siteId' : '707352',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 980,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : ""
};




integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$("footer, #main-content, #main-nav").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
		$("#main-nav").css({
			"z-index" : "4",
			"position" : "relative"
		});
		$(".leaderboard>div").css({
			"margin" : "15px auto"
		});

		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				'plr_PageAlignment' : 'left'
			});
			$("#main-nav, #main-content, footer").css({
				"margin-left" : "0px"
			});
			$(".schedule-dates, .schedule-channels").css({
				"max-width" : "980px",
				"margin" : "0px"
			});
		} else {
			$(".schedule-dates, .schedule-channels").css({
				"max-width" : "980px",
				"left" : "0px",
				"right" : "0px",
				"margin" : "0 auto"
			});
		}



		$(".category-bar").css({
			"top" : "0"
		});
		var heroTopMargin = 0 - $(".category-bar").outerHeight();
		$(".hero-wide").css({
			"margin-top" : heroTopMargin
		});


		// hide leaderboard ad slots
		$("#div-gpt-ad-1_pixel, #div-survey-1_pixel, .container-fluid.leaderboard").css({
			"display" : "none"
		});
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "5"
	});
});

/* Passback Tag */
ISMPassback = function() {
	return "<!--  Begin Rubicon Project Tag -->\n\n<!--  Site: Sky UK Channel 5   Zone: Tablet - ROS   Size: Leaderboard  -->\n\n<!--  PLACEMENT: Above the Fold;   -->\n\n<script language=\"JavaScript\" type=\"text/javascript\">\n\nrp_account   = '7908';\n\nrp_site      = '59754';\n\nrp_zonesize  = '284362-2';\n\nrp_adtype    = 'js';\n\nrp_smartfile = '[SMART FILE URL]';\n\n<\\script>\n\n<script type=\"text/javascript\" src=\"https://ads.rubiconproject.com/ad/7908.js\"><\\script>\n\n<!--  End Rubicon Project Tag -->";
};

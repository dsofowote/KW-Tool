integration.meta = {
	"sectionID" : "124836",
	"siteName" : "50 connect",
	"publisher" : "olderiswiser",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1260]
};

integration.params = {
	'mf_siteId' : '681733',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1000,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "leaderboard2, mpu2, mpu1, leaderboard, [id^=zzPagePeel46752], lb_ifr",
	"plr_HideElementsByClass" : "ad, leaderboard, leaderboard_ads, mpu_ads",
	"plr_FastInit" : true,
	"plr_ServePassbackInIframe" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".wide-skyscraper").hide();
		$("body").css({
			"width" : "1000px",
			"margin" : "0 auto"
		});
		$("head").append("<style> #home-page {margin-top: 0 !important;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	frtop = e.data.plr_FrameTop;
	$("body").css({
		"background-position" : "0 " + frtop + "px"
	});
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "100"
	});
});

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/3490\"><\\script>";
};

integration.meta = {
	'sectionID' : '125913',
	'siteName' : 'FourFourTwo Singapore',
	'platform' : 'desktop',
	'restrictions' : ''
};



integration.testParams = {
	'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706674',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 1100,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	"plr_HideElementsByID" : "leaderboard, fby-tab-8261, block-hcm-ads-mpu1",
	'plr_StartScrollOnAnchor' : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.InSkinTabHide();
		$(window).resize(function() {
			integration.custom.InSkinTabHide();
		});
		$("#main-menu").css({
			"max-width" : "973px"
		});
		$(".top-background").css({
			"background-color" : "transparent",
			"box-shadow" : "none"
		});
		$("header, #footer-wrapper, #navigation").css({
			"max-width" : "1100px",
			"margin" : "0 auto"
		});
		$("#navigation.stickynav-active").css({
			"left" : "0",
			"right" : "0"
		});
		$("#page").css({
			"margin-top" : "0px"
		});
	}
});

integration.on("adServed", function(e) {
	$("head").append("<style>.close #InSkinBrowser0_x span {margin-right: 0px !important; position: static !important; background-color: transparent !important;}</style>");
	$("head").append("<style>.close #InSkinBrowser0_x, .close #InSkinBrowser0_c {margin-right: 0px !important;}</style>");
	$("head").append("<style>.top-contain{width: 1100px !important; margin: 0 auto; display: block !important;}</style>");
});

integration.custom.InSkinTabHide = function() {
	var windowWidth = $(window).width()
	var minWindowWidth = 1430;
	if (windowWidth < minWindowWidth) {
		$("#fby-tab-8261").hide();
	} else {
		$("#fby-tab-8261").show();
	}
}
/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\" src=\"https://ads.ayads.co/ajs.php?zid=18638\"><\\script>";
};

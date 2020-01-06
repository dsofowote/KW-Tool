integration.meta = {
	"sectionID" : "124649",
	"siteName" : "Neue Presse",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707235',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 960,
	"plr_ContentType" : "PAGESKINEXPRESS",
	'plr_PageAlignment' : 'custom',
    'plr_FramePositionCSS' : 'margin-left: 160px; border-left: transparent solid 0px;',
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : "",
	'plr_BarneyThresholdClicks' : 4,
	'plr_BarneyThresholdRate' : 0
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>.clearfix{overflow: auto;} .clearfix::after{content: ''; clear: both; display: table;}</style>");
		$('body').addClass('clearfix');
		$("head").append("<style>.pdb-navbar{left: 0 !important;} .page{margin: 0 0 0 160px;}</style>");
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"margin-top" : "48px"
	});
});

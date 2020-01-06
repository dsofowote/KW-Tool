integration.meta = {
	"sectionID": "125092",
	"siteName": "Kicker",
	"publisher": "interactivemedia",
	"platform": "desktop"
};

integration.testParams = {
	"desktop_resolution": [0]
};

integration.params = {
	'mf_siteId': '707870',
	"plr_ContentType": "PAGESKINEXPRESS",
	"plr_PageAlignment": "left",
	"plr_UseCreativeSettings": true,
	"plr_ContentW": 1220,
	"plr_UseFullVersion": true,
	"plr_GetContentHeightVersion": 2,
	"plr_HideElementsByID": "",
	"plr_FastInit": true,
	//"plr_FramePositionCSS": "margin:0 auto;right:153.5px",
	"plr_GetContentHeightVersion" : 2
};

integration.on("adCallResult", function (e) {
	$("#kick__page-container").css({
		//"width": "1220px",
		"margin-left": "10px",
		//"position": "relative"
	});
	$(".ovAdSky > .ovAdHead").hide();
	$("#ad-sb").hide();
});

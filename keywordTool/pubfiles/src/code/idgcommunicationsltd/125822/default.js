integration.meta = {
   'sectionID' : '125822',
   'siteName' : 'Mac World - Desktop - (INT ex UK)',
   'platform' : 'desktop'
};




integration.testParams = {
   'desktop_resolution' : [1360]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '713121',
	"plr_PageAlignment" : "center",
	"plr_ContentW" : 1100,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_UseCreativeSettings" : true,
	"plr_HideElementsByID" : "",
	"plr_FastInit" : true,
	"plr_HideElementsByID" : "topBannerSpot, topMpu, skyscraperContainer, bottomMpu, bottomBannerSpot, topLeaderBoardHolder",
	"plr_ConsentTimeout" : 3
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
	}
});

integration.on("layoutChange", function(e) {
	inSkinHeaderHeight = e.data.plr_FrameTop;
	try {
		window.mwInskinActiveCall(inSkinHeaderHeight);
	} catch (e) {
	}
});

/* Passback Tag */
window.ISMPassback = function() {
	return "<script type=\"text/javascript\" src=\"https://jp.ads.justpremium.com/adserve/js.php?zone=22817\"><\\script>";
};

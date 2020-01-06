integration.meta = {
	"sectionID" : "125618",
	"site" : "Mac World (International)",
	"product" : "PageSkin",
	"platform" : "desktop",
	"restrictions" : ""
};




integration.testParams = {
	"desktop_resolution" : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706404',
	"plr_PageAlignment" : "center",
	"plr_ContentW" : 1100,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_UseCreativeSettings" : true,
	"plr_HideElementsByID" : "",
	"plr_FastInit" : true,
	"plr_HideElementsByID" : "topBannerSpot, topMpu, skyscraperContainer, bottomMpu, bottomBannerSpot, topLeaderBoardHolder"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(window).scroll(function() {
			$("#sidebarHolder.fixedSide").css({
				"width" : "332px"
			});
		});
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
	return "<script src=\"//ad.adip.ly/dlvr/adiply_statmarg.min.js?site_id=MacWorldMarginROW_AP&t=250\"><\\script>";
}; 
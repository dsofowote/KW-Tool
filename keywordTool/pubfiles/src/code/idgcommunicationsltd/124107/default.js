integration.meta = {
	"sectionID" : "124107",
	"siteName" : "Mac World",
	"publisher" : "idg",
	"platform" : "desktop"
};

/* As this integration has a passback we must use synchronous mode (Disabled at publisher's request)*/


integration.testParams = {
	"desktop_resolution" : [1360]
};

integration.params = {
	'mf_siteId' : '681701',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1100,
	"plr_UseFullVersion" : true,
	"plr_FastInit" : true,
	"plr_HideElementsByID" : "topBannerSpot, topMpu, skyscraperContainer, bottomMpu, bottomBannerSpot, topLeaderBoardHolder",
	'plr_PageHeightAdjustment' : -30,
	"plr_ConsentTimeout" : 2
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('body').css({
			"height" : "100%"
		});
	}
});

integration.on("layoutChange", function(e) {
	inSkinHeaderHeight = e.data.plr_FrameTop;
	try {
		window.mwInskinActiveCall(inSkinHeaderHeight);
	} catch (e) {
	}

	$("head").append("<style id='stickyLeaderboardStyles'></style>");
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});

});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < (inSkinHeaderHeight + 68)) {
		var newheight = inSkinHeaderHeight - height;
		$("#stickyLeaderboardStyles").html(".beSticky{position: inherit;}");
	} else {
		$("#stickyLeaderboardStyles").html(".beSticky{top: 0px;}");
	}
}

/* Passback Tag */
window.ISMPassback = function() {
    return "<script type=\"text/javascript\" src=\"https://sac.ayads.co/sublime/2512\"><\\script>";
};

integration.meta = {
	"sectionID" : "125276",
	"siteName" : "Mirror Publisher bookings",
	"publisher" : "mirror",
	"platform" : "desktop"
};

window.ISMPassback = function() {
	try {
		PageSkinFallback();
	} catch (e) {
	};
}

integration.testParams = {
	"desktop_resolution" : [1232]
};

integration.params = {
	'mf_siteId' : '707779',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 972,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad-]",
	"plr_HideElementsByClass" : "ad, leaderboard",
	"plr_URLKeywords" : 1
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('.fb-recommendations-bar').css({
			'display' : 'none'
		});
		$('head').append('<style>#page {margin-top: 0px !important;}</style>');
	}
});

integration.meta = {
	"sectionID" : "124764",
	"siteName" : "Recklingh�user Zeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707315',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1008,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseFullVersion" : true,
	"plr_GetContentHeightVersion" : 2,
	"plr_HideElementsByID" : "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append("<style>#header.fixed {position: absolute; top: 10px !important;}</style>");
	}
});

integration.on("layoutChange", function(e) {
	var frside = e.data.plr_FrameSide;
	frside += 30;
	var supheight = $("#superbanner").height();
	var frtop = e.data.plr_FrameTop;
	frtop += supheight;
	frtop += 117;
	$(document).scroll(function() {
		var sTop = $(document).scrollTop();
		if (sTop > frtop) {
			$("#header").css({
				"position" : "fixed",
				"margin-top" : "-117px",
				"left" : frside
			});
		} else {
			$("#header").css({
				"position" : "absolute",
				"margin-top" : "0px",
				"left" : "30px"
			});
		}
	});
});

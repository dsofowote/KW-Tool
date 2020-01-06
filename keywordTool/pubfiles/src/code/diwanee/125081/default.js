integration.meta = {
	"sectionID" : "125081",
	"siteName" : "forum.z4ar",
	"publisher" : "diwanee",
	"platform" : "desktop"
};

integration.testParams = {
  "desktop_resolution": [0]
};

integration.params = {
	"srv_SectionID" : "125081",
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1028,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#footer_iframe").css({
			"max-width" : "1028px",
			"margin" : "0 auto",
			"display" : "block"
		});
		$(".z4_header, .z4_navbar").css({
			"max-width" : "1028px",
			"margin" : "0 auto"
		})
	}
});

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css("z-index", "3");
});

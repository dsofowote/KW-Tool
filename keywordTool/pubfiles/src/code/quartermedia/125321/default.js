integration.meta = {
	"sectionID" : "125321",
	"siteName" : "Golfpost",
	"publisher" : "quarter",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1450]
};

integration.params = {
	'mf_siteId' : '707839',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1130,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad]"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("footer, header, #wrapper, #header-wrap, #top-bar").css({
			"max-width" : "1130px",
			"margin" : "0 auto"
		});

		$("[id~='skin_container_']").css({
			"display" : "none"
		});

		$(window).bind('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$("#header-wrap").css({
					"margin" : "0 auto",
					"left" : "0",
					"right" : "0"
				});
			}
		});
	}
});



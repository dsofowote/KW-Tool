integration.meta = {
	"sectionID" : "125470",
	"siteName" : "TV3",
	"publisher" : "tv3",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1261]
};

integration.params = {
	'mf_siteId' : '707237',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1001,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "[id^=div-gpt-ad]"
};

integration.on("adServed", function(e) {
	$("body").css({
		"padding-top" : "0px",
		"background-image" : "none"
	});
	$("#topbar2013").css({
		"max-width" : "1001px",
		"left" : "50%",
		"margin-left" : "-501.5px"
	});
	$("#ad_leader, #ad_button").css({
		"margin-top" : "50px"
	});
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	$("#close_button").click(function() {
		$("#topbar2013").css({
			"margin-top" : integration.custom.PageSkinTopPanel
		});
	});

});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if ($("#cookie_container").css('display') === 'block') {
		if (height < integration.custom.PageSkinTopPanel) {
			var newheight = integration.custom.PageSkinTopPanel - height + 99;
			$("#topbar2013").css({
				"margin-top" : newheight
			});
		} else {
			$("#topbar2013").css({
				"margin-top" : "99px"
			});
		};
	} else {
		if (height < integration.custom.PageSkinTopPanel) {
			var newheight = integration.custom.PageSkinTopPanel - height;
			$("#topbar2013").css({
				"margin-top" : newheight
			});
		} else {
			$("#topbar2013").css({
				"margin-top" : "0px"
			});
		};
	};

}
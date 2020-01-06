integration.meta = {
	"sectionID" : "125242",
	"siteName" : "La Rioja",
	"publisher" : "vocento",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1310]
};

integration.params = {
	'mf_siteId' : '707622',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1050,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "publiTop, roba"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		integration.custom.InSkinNavTopValue = parseInt($("#navbar").css("top"));
		var tempNavPosition = integration.custom.InSkinNavTopValue + 100;
		$("#navbar").css("top", tempNavPosition + "px");
	}
});

integration.on("layoutChange", function(e) {
	integration.custom.PageSkinTopPanel = e.data.plr_FrameTop;
	integration.custom.InSkinNavTopValue = integration.custom.PageSkinTopPanel + integration.custom.InSkinNavTopValue;
	$("head").append("<style>#navbar {max-width : 1050px;} #navbar.inSkinHeader {position: absolute !important; top: " + integration.custom.InSkinNavTopValue + "px !important;}</style>");
	integration.custom.InSkinTopNav();
	$(document).scroll(function() {
		integration.custom.InSkinTopNav();
	});
	$(".ism-frame").parent().css("z-index", "1005");
});

integration.custom.InSkinTopNav = function() {
	var height = $(document).scrollTop();
	if (height < integration.custom.PageSkinTopPanel + 110) {
		$('#navbar').addClass('inSkinHeader');
	} else {
		$('#navbar').removeClass('inSkinHeader');
	}
}
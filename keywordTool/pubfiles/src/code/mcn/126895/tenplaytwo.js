integration.meta = {
	"sectionID" : "126895",
	"site" : "Ten Play - Desktop - (AU)",
	"product" : "PageSkin on desktop"
};
integration.testParams = {
	"desktop_resolution" : []
};
integration.flaggedTests = [];

integration.params = {
	"srv_Keywords" : "pspd_i",
	"plr_FastInit" : true,
	"plr_PageAlignment" : "center",
	"plr_ContentW" : 1260,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_UseFullVersion" : true,
	"plr_UseCreativeSettings" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("head").append('<style type="text/css">.layout__bottom-four-ad {margin:0 auto !important;}</style>');
		var navHeight = $("#wrapper > div.top-nav").height();
		if ($("#wrapper > section.n03.navigation.show-background-color > nav.nav-tabs.sub-secondary-navigation").length == 1) {
			$("<div id='inskinanchor'></div>").insertAfter("#wrapper > section.n03.navigation.show-background-color > nav.nav-tabs.sub-secondary-navigation");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -299
			});
		} else  {
			$("<div id='inskinanchor'></div>").insertAfter("#wrapper > section.n03.navigation.show-background-color");
			integration.base.setCfg({
				"plr_AnchorParent" : "#inskinanchor",
				"plr_PageHeightAdjustment" : -259
			});
		}
		$("body > div.page-wrapper").css({
			"overflow" : "visible"
		});
		$("#wrapper > section.n03.navigation.show-background-color").css({
			"background-color" : "transparent !important"
		});
		$('head').append('<style type="text/css">#wrapper > section.n03.navigation.show-background-color {background-color: transparent !important;}</style>');
		$("footer").css({
			"width" : "1260px",
			"margin" : "0 auto"
		});
		$("footer > div").css({
			"width" : "100%"
		});
	}
});
integration.meta = {
	"sectionID" : "125058",
	"siteName" : "Augsburger Allgemeine",
	"publisher" : "oms",
	"platform" : "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707364',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "left",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1040,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_FastInit": true

};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		$(".b-header__center, .b-header__main-nav, .b-header__meta-nav, footer ul").css({
			"max-width" : "1040px",
			"margin" : "0 auto"
		});
		$("footer").css({
			"max-width" : "1040px",
		});
		$(".b-menu_local.b-header__local-menu").css({
			"padding-left" : "15px"
		});
	}
});

integration.on('adServed', function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

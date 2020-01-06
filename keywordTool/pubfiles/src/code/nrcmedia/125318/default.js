integration.meta = {
	"sectionID" : "125318",
	"siteName" : "NRC",
	"publisher" : "nrcmedia",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	'mf_siteId' : '706768',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1450,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "[class^=adhese_]",
	"plr_FastInit" : true
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".nmt-layout.nmt-layout--sidebar-align-right").css({
			"max-width" : "1420px"
		});
		$("header, .header__scroll__wrapper, .footer").css({
			"max-width" : "1420px",
			"margin" : "0 auto"
		});
		$("body").css({
			"overflow-x" : "visible"
		});

		$("main").css({
			"max-width" : "1420px"
		});

		$(".banner--leaderboard").css({
			"display" : "none"
		});
		$('head').append('<style type="text/css">.header, main {transform: none !important}</style>');
	}
});

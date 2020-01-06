integration.meta = {
	"sectionID" : "125082",
	"siteName" : "Nikkan Sports",
	"publisher" : "nikkansports",
	"platform" : "desktop"
};

integration.testParams = {
   'desktop_resolution' : [1240]
};

integration.params = {
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 980,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "ad728x90",
	"plr_HideElementsByClass" : "ad300x250,ad300x600,ad300x125"
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {

		var bgcss = $('body').css('background-image');
		$('head').append('<style>#wrapper {background: ' + bgcss + ' repeat-x scroll center top #ffffff} body {background-image: none !important;}</style>');

	}
});

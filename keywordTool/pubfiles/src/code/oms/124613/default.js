integration.meta = {
	"sectionID" : "124613",
	"siteName" : "Borkener Zeitung",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707591',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 992,
	"plr_PageAlignment" : "custom",
	"plr_FramePositionCSS" : "margin: 0 auto;",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "rectangle"
};

integration.on("adServed", function(e) {
	$('#container_banner').css({
		'margin-top' : '10px'
	});
});

integration.meta = {
	"sectionID" : "124614",
	"siteName" : "Die Oberbadische",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706256',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 960,
	"plr_PageAlignment" : "left",
	"plr_HideElementsByID" : "superbanner, rectangle",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	  /* Add a spacer pixel to the bottom of the content (for content using float positioning) */
	  integration._addPixel();
});

integration.on("adServed", function(e) {
	$('#superbanner').css('margin-top', '10px');
});

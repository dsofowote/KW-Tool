integration.meta = {
	"sectionID" : "124639",
	"siteName" : "Daily Record",
	"publisher" : "mirror",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1500]
};

integration.params = {
  'mf_siteId': '681902',
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1240,
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_URLKeywords" : "1"
};

integration.on("adServed", function(e) {
	$('#reskin_').hide();
	$('#page').css({
		'margin-top' : '0px'
	});
});

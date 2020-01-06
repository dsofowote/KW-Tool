integration.meta = {
	"sectionID" : "124830",
	"siteName" : "Boblinger Bote",
	"publisher" : "oms",
	"platform" : "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '721048',
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1150,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseFullVersion" : true,
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$('.site_container.boxed').css({
			"float" : "none"
		});
		$('#oms_gpt_superbanner').css({
			"margin-top" : "10px"
		});		
	}
});

integration.meta = {
	"sectionID" : "124559",
	"siteName" : "Journaldunet",
	"publisher" : "ccmbenchmark",
	"platform" : "desktop"
};

integration.telemetry.setup({
	'url': true
});

integration.testParams = {
	"desktop_resolution" : []
};

integration.params = {
	'mf_siteId' : '706455',
	"plr_UseCreativeSettings" : true,
	"plr_UseFullVersion" : true,
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_ContentW" : 1300,
	"plr_PageAlignment" : "center",
	"plr_HideElementsByID" : "",
	"plr_HideElementsByClass" : "ba"
};

integration.on("adServed", function(e) {
	$("#sidebar_follower").hide();
	$(".ccmcss_offcanvas_1").css({
		"max-width" : "1300px",
		"margin" : "0 auto"
	});
});
/* Passback Tag */
window.ISMPassback = function() {
    return "<script src = \" https://acdn.adnxs.com/mediation/noad.js \" type = \"text / javascript\"> </ script>";
};

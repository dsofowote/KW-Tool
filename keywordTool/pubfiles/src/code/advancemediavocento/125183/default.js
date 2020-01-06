integration.meta = {
	"sectionID" : "125183",
	"siteName" : "Hoy Cinema",
	"publisher" : "vocento",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.flaggedTests = [];

integration.params = {
	'mf_siteId' : '706485',
	'plr_PageAlignment' : 'center',
	'plr_ContentW' : 980,
	'plr_ContentType' : 'PAGESKINEXPRESS',
	'plr_UseFullVersion' : true,
	'plr_UseCreativeSettings' : true,
	'plr_HideElementsByID' : '',
	'plr_HideElementsByClass' : ''
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css("z-index", "1001");
});

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#wrap").css({
			"max-width" : "980px",
			"margin" : "0 auto"
		});
		$("#megabanner-id").css({
			"margin" : "10px auto"
		});
	}
});

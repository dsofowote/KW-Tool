integration.meta = {
	"sectionID" : "125176",
	"siteName" : "ComputerBase",
	"publisher" : "stroeer",
	"platform" : "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
	"plr_ContentType" : "PAGESKINEXPRESS",
	"plr_PageAlignment" : "center",
	"plr_UseCreativeSettings" : true,
	"plr_ContentW" : 1000,
	"plr_UseFullVersion" : true,
	"plr_PageHeightAdjustment" : -80,
	"plr_HideElementsByID" : "", 
	'plr_StartScrollOnAnchor' : true,
	'plr_ScrollAdjustment' : -20
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".adbox-banner").hide();
	}
});

integration.on("adServed", function(e) {
	$(".container").css({
		"max-width" : "1000px",
		'left' : '50%', 
		'margin-left' : '-500px'
	});
	$(".ism-frame").parent().css({
		"top" : "80px"
	});
	//$(".adbox-banner").hide();
	/*$(".header").css({
		"padding-right" : "0px"
	});*/
});

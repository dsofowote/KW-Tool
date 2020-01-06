integration.meta = {
  "sectionID": "124282",
  "siteName": "Escapist Magazine",
  "publisher": "defymedia",
  "platform": "desktop"
};

integration.testParams = {
	"desktop_resolution" : [ 1310 ]
};

integration.params = {
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1050,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_UseFullVersion": true,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "ad_rectangle",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$("#site_menu").css({
			"width" : "1050px"
		});
		$("#site_menu").css({
			"margin" : "0 auto"
		});
		$("#legal_container").css({
			"width" : "1050px"
		});
		$("#legal_container").css({
			"margin" : "0 auto"
		});
		$("#container").css({
			"background" : "none"
		});
		$("#ftdiv568849").css({
			"top" : "100px"
		});
	}
});

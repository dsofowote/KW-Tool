integration.meta = {
  "sectionID": "125280",
  "siteName": "Weblogit",
  "publisher": "advice",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 984,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": ""
};

integration.on('adCallResult', function(e) {
	if (e.data.hasSkin) {
		if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
			/* PageSkin Edge specific changes */
			integration.base.setCfg({
				"plr_PageAlignment" : "left"
			});
			$("#footer > .container").css({
				"margin-left" : "0"
			});
			$("head").append("<style>#wbimasthead{margin-left: 0 !important;}</style>");
			$(".sitecontainer").css({
				"margin-left" : "-15px"
			});
		}
	}
});

integration.on("adServed", function(e) {
  $("#wbimasthead").css({
    "max-width": "984px",
    "margin": "0 auto"
  });
  $(".ism-frame").parent().css({
    "z-index": "100000"
  });
});

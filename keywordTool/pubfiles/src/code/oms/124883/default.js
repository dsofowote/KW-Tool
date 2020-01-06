integration.meta = {
  "sectionID": "124883",
  "siteName": "Vaihinger Kreiszeitung",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706474',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 990,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": ""
};

integration.on("layoutChange", function(e) {
	$("#footer").css({
		"max-width" : "990px"
	});
});

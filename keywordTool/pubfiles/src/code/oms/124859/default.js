integration.meta = {
  "sectionID": "124859",
  "siteName": "Mindener Tageblatt",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707258',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 980,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
	if (e.data.hasSkin) {
		$(".container").css({
			"margin-top" : "0",
		});
	}
});
integration.meta = {
  "sectionID": "124927",
  "siteName": "G�ubote ",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '721057',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 840,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id^=uAd_], [id^=ox_]",
  "plr_HideElementsByClass": ""
};

integration.on("adServed", function(e) {
	$(".ism-frame").parent().css({
		"z-index" : "1000"
	});
});

integration.meta = {
  "sectionID": "124723",
  "siteName": "Stimme",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706263',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1020,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": ""
};

integration.on("adServed", function(e) {
  $('#superbanner').hide();
});

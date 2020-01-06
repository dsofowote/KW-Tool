integration.meta = {
  "sectionID": "124618",
  "siteName": "Neue Westf�lische",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {
};

integration.params = {
	'mf_siteId' : '706398',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 1062,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "[id^=em_adserver_]",
  "plr_HideElementsByClass": "",
  'plr_BarneyThresholdClicks' : 4,
  'plr_BarneyThresholdRate' : 0
};

integration.on("adServed", function(e) {
  $("body").css({
    "padding-right" : "0px"
  });
});

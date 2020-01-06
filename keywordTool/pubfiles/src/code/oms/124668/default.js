integration.meta = {
  "sectionID": "124668",
  "siteName": "Ostth�ringer Zeitung",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706446',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1000,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id=uAd_]",
  "plr_HideElementsByClass": ""
};

integration.on("adServed", function(e) {
  $('head').append('<style>#com-navigation {position: relative !important;}</style>');
  $('body').css({
    'margin-left': '0px',
    'padding-left': '160px'
  });
});

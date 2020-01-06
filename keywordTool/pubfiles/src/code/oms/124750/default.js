integration.meta = {
  "sectionID": "124750",
  "siteName": "rga.online",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707268',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 1024,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": "rectangle,botom_ad"
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $(".id-SiteWrap").css({
      "margin-left": "auto",
      "margin-right": "auto"
    });
  }
});

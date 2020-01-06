integration.meta = {
  "sectionID": "124995",
  "siteName": "Top Gear HK",
  "publisher": "mingpao",
  "platform": "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1243]
};

integration.params = {
	'mf_siteId' : '707224',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 983,
  "plr_PageAlignment": "left",
  "plr_HideElementsByID": "iframe_id",
  "plr_HideElementsByClass": "toHideByPageSkin"
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("embed, iframe").addClass("toHideByPageSkin");
  }
});

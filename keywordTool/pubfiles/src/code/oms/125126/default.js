integration.meta = {
  "sectionID": "125126",
  "siteName": "Frankfurter Neue Presse",
  "publisher": "oms",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707489',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 990,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {} else {}
  }
});

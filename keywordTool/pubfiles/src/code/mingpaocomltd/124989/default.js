integration.meta = {
  "sectionID": "124989",
  "siteName": "MP Deluxe",
  "publisher": "mingpao",
  "platform": "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1260]
};

integration.params = {
	'mf_siteId' : '707415',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 1000,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("body").css({
    	"background-image" : "none"
    });
    /* Add a spacer pixel to the bottom of the content (for content using float positioning) */
	integration._addPixel();
  }
});
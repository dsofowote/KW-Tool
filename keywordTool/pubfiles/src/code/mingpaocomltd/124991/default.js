integration.meta = {
  "sectionID": "124991",
  "siteName": "MingPao Weekly",
  "publisher": "mingpao",
  "platform": "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1257]
};

integration.params = {
	'mf_siteId' : '706526',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 997,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("body").addClass("in_pageskin");
  }
});

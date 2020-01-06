integration.meta = {
  "sectionID": "124506",
  "siteName": "Cicero",
  "publisher": "urbanmedia",
  "platform": "desktop"
};




integration.testParams = {
	"desktop_resolution" : [1320]
};

integration.params = {
	'mf_siteId' : '706234',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1000,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": "region-banner"
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("#page").css({
    	"margin" : "0 auto"
    });
    $("#page-banner").css({
    	"height" : "0px"
    });
  }
});

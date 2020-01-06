integration.meta = {
  "sectionID": "124543",
  "siteName": "Merkur Online",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {
};

integration.params = {
	'mf_siteId' : '706377',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentW": 1024,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": "idAdvertising, idAdPosHEAD, idVideoDocuments",
  'plr_BarneyThresholdClicks' : 4,
  'plr_BarneyThresholdRate' : 0
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("body").css({
    	"background-image" : "none",
    	"background-color" : "#dee3e8"
    })
    $(".id-SiteBEEPWrap").css({
    	"max-width" : "1024px"
    });
    $(".id-SiteHeader-wrap").css({
    	"max-width" : "1004px"
    });
  }
});

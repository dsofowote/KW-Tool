integration.meta = {
  "sectionID": "125313",
  "siteName": "Auto.de",
  "publisher": "oms",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '707339',
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 990,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "",
  "plr_GetContentHeightVersion" : 2
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("#wrapper").css({
    	"margin-top" : "30px"
    });
    
    $("#ad_banner").css({
        "height" : "0px"
    });
  }
});

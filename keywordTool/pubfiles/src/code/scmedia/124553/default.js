integration.meta = {
  "sectionID": "124553",
  "siteName": "Capital CEO",
  "publisher": "scmedia",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706346',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1000,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $(".content_big5").css({
    	"width" : "1000px"
    });
  }
});

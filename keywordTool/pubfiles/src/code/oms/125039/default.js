integration.meta = {
  "sectionID": "125039",
  "siteName": "Fudder",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706272',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1000,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseFullVersion": true,
  "plr_GetContentHeightVersion": 2,
  "plr_HideElementsByID": "[id^=adcloud_], [id^=google_ads_], [id^=uAd_], [id^=ox_]",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("#adserverLeaderboard").css({
    	"height" : "auto"
    });
    $("#omsv_sky_DhtmlLayer").hide();
    $('.container, #zoneAdserverSuper').css({
    	"max-width" : "980px",
    	"margin" : "0 auto"
    })
    $('#ad-slot').css({
    	"max-width" : "980px"
    })
    
    
  }
});

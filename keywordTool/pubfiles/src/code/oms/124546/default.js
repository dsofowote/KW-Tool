integration.meta = {
  "sectionID": "124546",
  "siteName": "Badische Zeitung",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706679',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentW": 960,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "left",
  "plr_HideElementsByID": "zoneAdserverMrec, helperAdserverContent2",
  "plr_HideElementsByClass": "bc_mainVideo_thumb",
  'plr_BarneyThresholdClicks' : 4,
  'plr_BarneyThresholdRate' : 0
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $('#zoneAdserverSuper').hide();
    $("body").css({
        "width" : "960px",
        "background" : "none",
        "background-color" : "none"
    });
    $("#wrapper").css({
        "margin" : "0 auto"
    });    
  }
});

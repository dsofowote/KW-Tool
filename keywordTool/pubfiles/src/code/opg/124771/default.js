integration.meta = {
  "sectionID": "124771",
  "siteName": "The Sun   ",
  "publisher": "opg",
  "platform": "desktop"
};

integration.testParams = {
	"desktop_resolution": [1280]
};

integration.params = {
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType" : "PAGESKINEXPRESS",
  "plr_ContentW": 1020,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "adsCTN, adsSuperCTN",
  "plr_HideElementsByClass": ""
};

integration.on("adServed", function(e) {
  $("#topMenuCTN, #footerCTN").css({
    "margin": "0 auto",
    "width": "1020px"
  });
  $("#back-top").css({
  	"visibility" : "hidden"
  });
});

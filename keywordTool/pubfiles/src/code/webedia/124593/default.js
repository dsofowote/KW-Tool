integration.meta = {
  "sectionID": "124593",
  "siteName": "Canalblog",
  "publisher": "webedia",
  "platform": "desktop"
};

integration.testParams = {
	"desktop_resolution" : [0]
};

integration.params = {
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 1080,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adServed", function(e) {
  $("#wrapper").css({
    "width" : "1080px",
    "margin" : "0 auto"
  });
});

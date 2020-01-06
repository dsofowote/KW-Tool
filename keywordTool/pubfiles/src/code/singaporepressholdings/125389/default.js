integration.meta = {
  "sectionID": "125389",
  "siteName": "Straits Times",
  "publisher": "singaporepressholdings",
  "platform": "desktop"
};

integration.testParams = {
  "desktop_resolution": [1260]
};

integration.params = {
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1000,
  "plr_UseFullVersion": true,
  "plr_HideElementsByID": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $(".st2014-main-footer").css({
      "width": "1000px",
      "margin": "0 auto"
    });
  }
});

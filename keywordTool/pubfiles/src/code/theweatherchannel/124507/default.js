integration.meta = {
  "sectionID": "124507",
  "siteName": "The Weather Channel",
  "publisher": "theweatherchannel",
  "platform": "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1260]
};

integration.params = {
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1000,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "ads",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("body, #footer-bg").css({
      "background": "none"
    });
    $("#header-body-bg, #footer-body-bg").css({
      "width": "1000px",
      "left": "50%",
      "margin-left": "-500px"
    });
    $("#wx-wrapper, #wx-breaking-now, #teconsent").css({
      "width": "1000px",
      "margin": "0 auto"
    });
    $(".ism-frame").parent().css({
      "z-index": "101"
    });
    $("#header-body-bg").css({
      "top": "inherit"
    });
  }
});

integration.on("adServed", function(e) {
  $(".ism-frame").parent().css({
    "z-index": "101"
  });
});

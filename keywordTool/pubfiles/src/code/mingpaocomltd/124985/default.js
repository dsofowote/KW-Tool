integration.meta = {
  "sectionID": "124985",
  "siteName": "Hihoku",
  "publisher": "mingpao",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 980,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("div").find('img[src$="/templets/new_v01/images/wx.png"]').hide();
    $(".index_bg, .nav_container, .top_v").css({
      "max-width": "980px",
      "margin": "0 auto"
    });
    $(".footer").css({
      "margin-bottom": "0"
    });
    $("body").css({
      "background-image": "none"
    });
  }
});

integration.on("adServed", function(e) {
  $(".ism-frame").parent().css({
  	"z-index" : "12"
  	});
});

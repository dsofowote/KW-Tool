integration.meta = {
  "sectionID": "124500",
  "siteName": "Realtotal",
  "publisher": "sportvertical",
  "platform": "desktop"
};

integration.testParams = {
	"desktop_resolution" : [1380]
};

integration.params = {
	'mf_siteId' : '706232',
  "plr_UseCreativeSettings": true,
  "plr_ContentW": 1060,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "[id^=div-gpt-ad-]",
  "plr_HideElementsByClass": "advert-top, widget-advert, advert-content"
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    // your code here
    $(".container-outer").css({
      "width": "1140px",
      "margin": "45px auto"
    });
    $(".container").css({
    	"width" : "0 auto"
    });
    $("#footer, #bottom-nav-wrap, #breadcrumbs-wrap").css({
      "width": "1040px",
      "margin": "0 auto",
      "padding-left": "10px",
      "padding-right": "10px"
    });
    $("#bottom-nav").css({
    	"marginRight" : "20px"
    });
    $(".container").css({
    	"margin" : "0 auto"
    });
    $("#top-nav-wrap").css({
      "width": "1060px",
      "left": "50%",
      "margin-left": "-530px"
    });
    $("#top-nav-wrap").css({
    	"position" : "relative"
    });
    $("#top-nav-wrap").css({
    	"marginBottom" : "-35px"
    });
    $(".site-logo").css({
    	"margin-right" : "20px"
    });
  }
});

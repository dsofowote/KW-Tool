integration.meta = {
  "sectionID": "125032",
  "siteName": "BBC Good Food",
  "publisher": "immediatemedia",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	
	'mf_siteId' : '707675',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_Responsive": true,
  "plr_PageWidthAdjustment": 76,
  "plr_PageHeightAdjustment": -50,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
  	$('body').addClass('ad-inskin-active');
    $("body").css({
    	"background" : "none"
    });
    $("#ad-leader").hide();
    $("#container").css({
    	"margin-top" : "0px"
    });
    if (e.data.productType == "PageSkinEdgeTablet" || e.data.format == "Pageskin Edge") {
      $("#scroll-wrapper").css({
        "width" : "1100px",
        "margin-left" : "0px"
      });
      integration.base.setCfg({
        "plr_PageAlignment" : "left"
      });
    }
  }
});

integration.on("adServed", function(e) {
  $(".ism-frame").parent().css({
  	"z-index" : "3"
  });
  $(".ism-frame").parent().css({
  	"top" : "50px"
  });
});

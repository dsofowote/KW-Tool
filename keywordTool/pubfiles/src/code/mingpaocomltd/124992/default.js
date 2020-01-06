integration.meta = {
  "sectionID": "124992",
  "siteName": "MingPao Weekly",
  "publisher": "mingpao",
  "platform": "tablet"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706331',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 980,
  "plr_PageAlignment": "left",
  "plr_HideElementsByID": "",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
    $("body").css({
    	"background-image" : "none"
    });
    $(".main_container").css({
    	"margin" : "0"
    })
  }
});

integration.on("layoutChange", function(e) {
  frtop = e.data.plr_FrameTop;
  frleft = e.data.plr_FrameSide;

  $("#bar01, #bar02, #bar03").css({
  	"margin-top" : frtop
  });
  $("#bar01, #bar02, #bar03").css({
  	"margin-left" : frleft
  });
});

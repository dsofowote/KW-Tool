integration.meta = {
   'sectionID' : '124734',
   'siteName' : 'Pistonheads - Desktop - (INT)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1298]
};

integration.params = {
	
  'mf_siteId': '681786',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 1038,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "banner, skyscraper, gpt_7294_mpu1, player, player-unavailable",
  "plr_HideElementsByClass": "col-3-8"
};

integration.on("adServed", function(e) {
  $("#body").css({
  	"background" : "none"
  });
  $("#footer, .site-header, .site-footer, .main-body, .header, .footer, #navComponent").css({
    "margin": "0 auto",
    "width": "1038px"
  });
  $(".asphalt").css({
  	"max-width" : "1038px"
  });
  $("footer").css({
  	"margin-top" : "30px"
  });
  $(".profiles").css({
  	"margin-right" : "10px"
  });
  $(".header-center").css({
  	"padding" : "0px 5px"
  });
});
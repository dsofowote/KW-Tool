integration.meta = {
  "sectionID": "124607",
  "siteName": "Aachener Nachrichten",
  "publisher": "oms",
  "platform": "desktop"
};

integration.testParams = {};

integration.params = {
	'mf_siteId' : '706248',
  "plr_UseCreativeSettings": true,
  "plr_UseFullVersion": true,
  "plr_ContentType": "PAGESKINEXPRESS",
  "plr_ContentW": 1000,
  "plr_PageAlignment": "center",
  "plr_HideElementsByID": "[id^=google_ads_],brightcovePlayerContainer",
  "plr_HideElementsByClass": ""
};

integration.on("adCallResult", function(e) {
  if (e.data.hasSkin) {
	  
	  //$('head').append('<style type="text/css">.article-actions.stickit {left:700px;} </style>');
    $(".park-footer, .park-footer__wrapper").css({"max-width":"1000px","margin":"0 auto"});

    
	  integration.on('layoutChange', function(e) {
			integration.custom.FrameSideRight = e.data.plr_FrameSideRight;
			integration.custom.FrameSide = e.data.plr_SFrameSide;
			
		    $("#login_bar").css({
		    	"left" : integration.custom.FrameSideRight
		    });
		    
		    $("#login-bar-toggle").css({
		    	"margin-left" : integration.custom.FrameSideRight
		    });			
		});
  }
});

integration.on("adServed", function(e) {
  $(".ism-frame").css({
  	"z-index" : "600"
  });
});

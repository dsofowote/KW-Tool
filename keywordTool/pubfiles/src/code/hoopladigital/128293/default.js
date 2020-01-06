integration.meta = {
   'sectionID' : '128293',
   'siteName' : ' Free Postcode Lottery - Desktop - (UK)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [1580]
};

integration.flaggedTests = [];

integration.channelHome = [];

integration.params = {
   'mf_siteId' : '1000570',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 1320,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : '',
   'plr_FastInit' : true
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var innernavHeight = $(".sub-navigation-inner").outerHeight();
     var menuHeight = $(".main-header").height();
     var headHeight = menuHeight + innernavHeight;
     integration.base.setCfg({
         plr_PageHeightAdjustment : -headHeight
     });
      $(".main-footer, #sidebarAds").css({
      		"width" : "1320px",
      		"margin" : "0 auto"
      	});
        $("head").append("<style> .main-content-inner{max-width: 1320px!important;}</style>");
   }
});

integration.on("adServed", function(e) {
  var innernavHeight = $(".sub-navigation-inner").outerHeight();
  var menuHeight = $(".main-header").height();
  var headHeight = menuHeight + innernavHeight;
        $(".ism-frame").parent().css({
            "top" : headHeight
        });
});

/* Passback Tag */
window.ISMPassback = function() {
   return "<!-- 'Passback_InSkin/FreePostcodeLottery' ### Size: [[1,1]] -->\n<script src='https://www.googletagservices.com/tag/js/gpt.js'>\n\tgoogletag.pubads().definePassback('/70228659/Passback_InSkin/FreePostcodeLottery', [[1,1]]).display();\n<\\script>";
};
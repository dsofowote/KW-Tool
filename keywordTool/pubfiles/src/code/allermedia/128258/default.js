integration.meta = {
   'sectionID' : '128258',
   'siteName' : 'Seoghor - Desktop - (DK)',
   'platform' : 'desktop'
};

integration.testParams = {
   'desktop_resolution' : [0]
};

integration.flaggedTests = [];

integration.params = {
   'mf_siteId' : '1000303',
   'plr_PageAlignment' : 'center',
   'plr_ContentW': 960,
   'plr_ContentType': 'PAGESKINEXPRESS',
   'plr_UseFullVersion': true,
   'plr_UseCreativeSettings': true,
   'plr_HideElementsByID' : '',
   'plr_HideElementsByClass' : ''
};

integration.on('adCallResult', function(e) {
   if (e.data.hasSkin) {
     var hHeight = $(".sticky-header").height();
     integration.base.setCfg({
          plr_ScrollAdjustment : -hHeight
      });
      $("footer, #cookiescript_injected").css({
        "width" : "960px",
        "margin" : "0 auto"
      });
      $("#cookiescript_injected").css({
        "right" : "0px"
      });
      $(".sticky-header").css({
        "z-index" : "1000002"
      });
   }
});

integration.on("adServed", function(e) {
    $(".ism-frame").parent().css({
        "z-index" : "1000000"
    });
});
